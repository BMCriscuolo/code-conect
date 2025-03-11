import Image from 'next/image';

export const Aside = () => {
  return (
    <aside className="gray flex h-screen w-44 items-start justify-center rounded-lg bg-[var(--color-primary-500)] px-10 py-4">
      <Image
        src="/svgs/logo.svg"
        alt="Logo do code conect"
        width={127}
        height={40}
      />
    </aside>
  );
};
