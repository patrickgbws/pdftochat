import DashboardClient from './dashboard-client';
import prisma from '@/utils/prisma';

export default async function Page() {
  const docsList = await prisma.document.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
      <div>
        <DashboardClient docsList={docsList} />
      </div>
  );
}
