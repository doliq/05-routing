import Link from 'next/link';

type Props = {
    params: {
          productId: string
        productId: string,
        reviewId: string
    }
}
  

export default function ProductDetails({ params }: Props) {
    return (
          <h1>Details about product {params.productId}</h1>
    )
}
        <div>
            <h1>Details about product {params.productId}</h1>
            <Link href={`/products/${params.productId}/reviews/${params.reviewId}`}>See Reviews</Link>
        </div>
    );
}