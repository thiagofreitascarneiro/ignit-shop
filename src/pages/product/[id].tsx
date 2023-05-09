import { ImageContainer, ProductContainer, ProductDetails } from '@/styles/pages/product';
import { useRouter } from 'next/router';

export default function Product() {

    const { query } = useRouter();

    return (
        <ProductContainer>
            <ImageContainer>
                
            </ImageContainer>
            <ProductDetails>
                <h1>camiseta X</h1>
                <span>R$ 79,90</span>

                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Dolore alias natus quisquam eius aliquid asperiores, 
                    inventore deserunt aperiam quia est
                     totam quo mollitia molestias tempore ratione nam quae nihil quos?
                </p>

                <button>Comprar agora</button>
            </ProductDetails>
        </ProductContainer>
    )
}