import "./_HomeButton.scss";
type HomeButtonProps = {
  title: string;
  className: string;
};

export default function HomeButton({ title, className }: HomeButtonProps) {
  return <button className={className}>{title}</button>;
}
