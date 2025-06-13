'use client';

// type EmailProps = { isHome?: boolean };

const Email = () => {
    const email = "marcoantonio16092003@gmail.com"
  return (
    <div className="w-[40px] fixed bottom-0 left-[40px] md:left-[20px] z-10 text-light-slate hidden md:block">
      <div className="fixed right-0 bottom-0 hidden lg:flex flex-col items-center">
        <div className="flex flex-col items-center relative
                        after:content-[''] after:block after:w-px after:h-[90px]
                        after:mx-auto after:bg-light-slate">
          <a
            href={`mailto:${email}`}
            style={{ writingMode: 'vertical-rl' }}
            className="my-5 p-2 font-mono text-xs leading-6
                      tracking-[0.1em] transition
                      hover:-translate-y-1"
          >
            {email}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Email;