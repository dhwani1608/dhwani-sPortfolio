import { Button } from '@/components/button';

export const Footer = () => {
  return (
    <footer className="text-muted-foreground my-4 px-4 text-center text-sm sm:my-8 sm:px-0">
      © {new Date().getFullYear()} Made with ❤️ by{' '}
      <Button variant="link" className="text-muted-foreground p-0 font-medium">
        <a href="https://github.com/dhwani1608"> Dhwani Vyas</a>
      </Button>
      <br></br>
      Inspired from{' '}
      <a
        href="https://github.com/Skolaczk/Portfolio.git"
        style={{ color: 'blue', textDecoration: 'underline' }}
      >
        Skolaczk
      </a>
    </footer>
  );
};
