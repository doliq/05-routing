import Link from "next/link";

export default function ProductList() {
    return (
          <div>
            <h1>Product List</h1>
            <h2>Product 1</h2>
            <h2>Product 2</h2>
            <h2>Product 3</h2>
            <Link href='/products/1'>Product 1</Link><br />
            <Link href='/products/2'>Product 2</Link><br />
            <Link href='/products/3'>Product 2</Link>
          </div>
    );
}