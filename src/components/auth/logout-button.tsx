'use client';

export function LogoutButton({ children }: WithChildren) {
  return (
    <span onClick={() => console.log('')} className="cursor-pointer">
      {children}
    </span>
  );
}
