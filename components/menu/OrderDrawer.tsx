'use client';

import React from 'react';
import type { MenuItem } from './MenuCard';

export interface OrderItem {
  item: MenuItem;
  quantity: number;
}

interface OrderDrawerProps {
  items: OrderItem[];
  onClose: () => void;
}

export default function OrderDrawer({
  items,
  onClose,
}: OrderDrawerProps) {
  const pricedItems = items.filter(
    (orderItem): orderItem is OrderItem & { item: MenuItem & { price: number } } =>
      orderItem.item.price !== null
  );

  const total = pricedItems.reduce(
    (sum, orderItem) =>
      sum + orderItem.item.price * orderItem.quantity,
    0
  );

  if (items.length === 0) {
    return null;
  }

  const whatsappMessage = [
    'Hi Food Story Café, I would like to order:',
    ...pricedItems.map(
      ({ item, quantity }) =>
        `- ${quantity}x ${item.name} (PKR ${
          item.price * quantity
        })`
    ),
    '',
    `Total: PKR ${total}`,
  ].join('\n');

  const whatsappUrl = `https://wa.me/923185600123?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 w-[calc(100%-3rem)] max-w-sm bg-[#ffffff] border border-[#e5e2dc] rounded-xl shadow-2xl p-5">
      
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[#e5e2dc] mb-3">
        <div className="flex items-center gap-3">
          <span className="text-[#9f3c16] text-lg">
            🛍
          </span>

          <h4 className="font-serif text-2xl font-semibold text-[#1c1c18]">
            Your Selection
          </h4>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close order summary"
          className="text-[#57423b] hover:text-[#1c1c18] text-xl transition-colors"
        >
          ×
        </button>
      </div>

      {/* Order Items */}
      <div className="space-y-2 max-h-48 overflow-y-auto mb-3 text-sm text-[#1c1c18]">
        {pricedItems.map(({ item, quantity }) => (
          <div
            key={item.id}
            className="flex items-center justify-between gap-3"
          >
            <span>
              {quantity}x {item.name}
            </span>

            <span className="font-medium whitespace-nowrap">
              PKR {item.price * quantity}
            </span>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="pt-2 border-t border-[#e5e2dc] flex items-center justify-between mb-3">
        <span className="font-semibold text-[#57423b]">
          Total:
        </span>

        <span className="font-serif text-2xl font-semibold text-[#9f3c16]">
          PKR {total}
        </span>
      </div>

      {/* WhatsApp Checkout */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-center bg-[#9f3c16] text-white font-semibold py-3 rounded-full hover:bg-[#7A2F18] transition-all"
      >
        Send Order via WhatsApp
      </a>
    </div>
  );
}