import { menuItems } from '@/data/menuData';

export async function GET() {
  return Response.json(menuItems);
}