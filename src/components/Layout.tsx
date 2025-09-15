import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32">{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
