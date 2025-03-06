import Image from 'next/image';

export const Aside = () => {
  return (
    <aside>
      <Image
        src="/svgs/logo.svg"
        alt="Logo do code conect"
        width={100}
        height={100}
      />
    </aside>
  );
};
