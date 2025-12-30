'use client';
import Image from "next/image";
import Link from "next/link";
import './style/home.css';

export default function HomePage() {

  return (
    <div className="home-container">
      <h1>Hello, World</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae quas harum cupiditate officiis consectetur iusto repellendus odio obcaecati doloremque maiores, pariatur qui delectus in molestias,
        quisquam nihil soluta ut similique corporis quo, vitae sapiente facere laborum. Repudiandae soluta, repellat temporibus quae enim esse officia adipisci tempora accusantium pariatur dolorum a culpa nesciunt
        reiciendis labore est laboriosam debitis consequuntur blanditiis ipsa veniam. Dicta minus, culpa expedita hic quibusdam voluptas nulla commodi doloribus dolores placeat, provident quae? Odio tempora iste placeat
        veniam illum nemo possimus doloremque a voluptatibus suscipit ipsum hic quasi consequatur sapiente deleniti reiciendis qui, non nostrum quae modi autem.</p>

      <h1>Learning List:</h1>
      <ul>
        <li><Link href="/column-row">Column Row Page</Link></li>
        <li><Link href="/card">Card Page</Link></li>
        <li><Link href="/imagesEx">Images Page</Link></li>
        <li><Link href="/carousel">Carousel Page</Link></li>
        <li><Link href="/coral">Coral Page</Link></li>
        <li><Link href="/hero">Hero Page</Link></li>
      </ul> 
    </div>
  );
}
