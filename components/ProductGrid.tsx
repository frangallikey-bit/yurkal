
import React from 'react';
import { Product } from '../types';

const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Hoodie Oversized Pato',
    price: 185,
    category: 'Abrigos',
    imageUrl: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop&grayscale=true',
    description: 'Algodón ultra pesado con bordes desgastados, construido para durar.'
  },
  {
    id: '2',
    name: 'Pantalón Recto Rosario',
    price: 240,
    category: 'Pantalones',
    imageUrl: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800&auto=format&fit=crop&grayscale=true',
    description: 'Silueta sastrera en negro mate profundo.'
  },
  {
    id: '3',
    name: 'Camisa de Lino Nocturna',
    price: 310,
    category: 'Camisas',
    imageUrl: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=800&auto=format&fit=crop&grayscale=true',
    description: 'Lino crudo con una caída etérea, inspirada en las noches de Bariloche.'
  },
  {
    id: '4',
    name: 'Botas de Cuero Obscura',
    price: 550,
    category: 'Calzado',
    imageUrl: 'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?q=80&w=800&auto=format&fit=crop&grayscale=true',
    description: 'Cuero de vaca artesanal con suelas arquitectónicas.'
  },
];

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900 mb-6">
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
        <button className="absolute bottom-4 left-4 right-4 bg-white text-black py-4 text-[10px] uppercase tracking-[0.2em] font-bold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          Añadir al Carrito
        </button>
      </div>
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <h3 className="text-xs uppercase tracking-widest text-zinc-300 group-hover:text-white transition-colors">{product.name}</h3>
          <p className="text-[9px] text-zinc-600 uppercase tracking-widest">{product.category}</p>
        </div>
        <span className="text-xs font-light text-zinc-400">${product.price}</span>
      </div>
    </div>
  );
};

const ProductGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
      {MOCK_PRODUCTS.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
