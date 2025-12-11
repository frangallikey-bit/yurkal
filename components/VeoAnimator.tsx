
import React, { useState, useRef } from 'react';
import { GoogleGenAI } from '@google/genai';
import { AspectRatio } from '../types';

// Removed local AIStudio interface and window augmentation as they conflict with environment-provided types

const VeoAnimator: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [aspectRatio, setAspectRatio] = useState<AspectRatio>(AspectRatio.PORTRAIT);
  const [statusMessage, setStatusMessage] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setVideoUrl(null);
    }
  };

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64 = (reader.result as string).split(',')[1];
        resolve(base64);
      };
      reader.onerror = (error) => reject(error);
    });
  };

  const generateVideo = async () => {
    if (!selectedFile) return;

    try {
      setIsGenerating(true);
      setStatusMessage('Verificando accesos...');

      // Fix: Accessing window.aistudio with type casting to avoid environment conflicts
      const aistudio = (window as any).aistudio;
      const hasKey = await aistudio.hasSelectedApiKey();
      if (!hasKey) {
        setStatusMessage('Selecciona una clave de API para continuar.');
        await aistudio.openSelectKey();
      }

      // Fix: Create a new GoogleGenAI instance right before making an API call to ensure latest API key
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
      const base64Image = await fileToBase64(selectedFile);

      setStatusMessage('Iniciando Motor Yurkal...');
      
      let operation = await ai.models.generateVideos({
        model: 'veo-3.1-fast-generate-preview',
        prompt: 'A cinematic high-fashion lookbook video. Atmospheric lighting with shadows and fog, evoking a sense of adventure, nature, and mysterious elegance. Minimal movements, grainy noir film texture.',
        image: {
          imageBytes: base64Image,
          mimeType: selectedFile.type,
        },
        config: {
          numberOfVideos: 1,
          resolution: '720p',
          aspectRatio: aspectRatio,
        }
      });

      const loadingMessages = [
        'Navegando entre sombras...',
        'Sintetizando la Patagonia...',
        'Construyendo texturas...',
        'Aplicando filtros noir...',
        'Casi listo...'
      ];
      
      let msgIndex = 0;
      const interval = setInterval(() => {
        setStatusMessage(loadingMessages[msgIndex % loadingMessages.length]);
        msgIndex++;
      }, 4000);

      while (!operation.done) {
        await new Promise(resolve => setTimeout(resolve, 10000));
        operation = await ai.operations.getVideosOperation({operation: operation});
      }

      clearInterval(interval);
      
      if (operation.response?.generatedVideos?.[0]?.video?.uri) {
        const downloadLink = operation.response.generatedVideos[0].video.uri;
        // Fix: Appending API key to the download link as required for Veo models
        const videoResponse = await fetch(`${downloadLink}&key=${process.env.API_KEY}`);
        const videoBlob = await videoResponse.blob();
        setVideoUrl(URL.createObjectURL(videoBlob));
        setStatusMessage('');
      } else {
        throw new Error('Video no generado');
      }
    } catch (error) {
      console.error(error);
      setStatusMessage('Fallo la generación. Intenta de nuevo.');
      // Fix: Handle the "Requested entity was not found." error by prompting for API key again
      if (error instanceof Error && (error.message.includes('Requested entity was not found.') || error.message.includes('not found'))) {
         await (window as any).aistudio.openSelectKey();
      }
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        <div className="bg-zinc-900/50 p-8 border border-white/5 rounded-sm backdrop-blur-sm">
          <h3 className="text-xl font-serif mb-6 text-white">Sube tu Look</h3>
          
          <div className="space-y-6">
            <div className="flex gap-4 mb-4">
              <button 
                onClick={() => setAspectRatio(AspectRatio.PORTRAIT)}
                className={`flex-1 py-3 text-[9px] uppercase tracking-widest border transition-all ${aspectRatio === AspectRatio.PORTRAIT ? 'bg-white text-black border-white' : 'border-white/10 text-zinc-500 hover:border-white/30'}`}
              >
                9:16 Retrato
              </button>
              <button 
                onClick={() => setAspectRatio(AspectRatio.LANDSCAPE)}
                className={`flex-1 py-3 text-[9px] uppercase tracking-widest border transition-all ${aspectRatio === AspectRatio.LANDSCAPE ? 'bg-white text-black border-white' : 'border-white/10 text-zinc-500 hover:border-white/30'}`}
              >
                16:9 Paisaje
              </button>
            </div>

            <div 
              onClick={() => fileInputRef.current?.click()}
              className="group relative h-64 border-2 border-dashed border-white/5 flex flex-col items-center justify-center cursor-pointer hover:border-white/20 transition-all overflow-hidden bg-black/40"
            >
              {previewUrl ? (
                <img src={previewUrl} alt="Preview" className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
              ) : (
                <>
                  <svg className="w-6 h-6 text-zinc-700 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  <p className="text-[9px] uppercase tracking-[0.4em] text-zinc-600">Arrastra o sube tu imagen</p>
                </>
              )}
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileChange} 
                className="hidden" 
                accept="image/*"
              />
            </div>

            <button 
              onClick={generateVideo}
              disabled={!selectedFile || isGenerating}
              className={`w-full py-5 text-[10px] uppercase tracking-[0.3em] font-bold transition-all ${!selectedFile || isGenerating ? 'bg-zinc-900 text-zinc-700 cursor-not-allowed' : 'bg-white text-black hover:bg-zinc-200 shadow-xl'}`}
            >
              {isGenerating ? 'Animando...' : 'Animar Expresión'}
            </button>
            
            <p className="text-[9px] text-zinc-700 text-center uppercase tracking-[0.3em]">
              Powered by Veo 3.1 Neural Engine
            </p>
          </div>
        </div>
      </div>

      <div className="relative aspect-[9/16] bg-[#020202] border border-white/5 rounded-sm overflow-hidden flex items-center justify-center">
        {isGenerating ? (
          <div className="text-center space-y-6">
            <div className="w-8 h-8 border border-white/20 border-t-white rounded-full animate-spin mx-auto"></div>
            <p className="text-[9px] uppercase tracking-[0.5em] text-white/40">{statusMessage}</p>
          </div>
        ) : videoUrl ? (
          <video 
            src={videoUrl} 
            className="w-full h-full object-cover" 
            autoPlay 
            loop 
            muted 
            controls
          />
        ) : (
          <div className="text-center px-12 opacity-30">
            <p className="text-[9px] uppercase tracking-[0.4em] text-zinc-600 mb-4">Previsualización</p>
            <p className="text-xs font-serif italic text-zinc-800">La silueta emergerá del vacío una vez finalizado el proceso.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VeoAnimator;
