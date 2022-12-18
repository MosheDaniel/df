import { FunctionComponent } from "react";

interface ProductsProps {
    
}
 
const Products: FunctionComponent<ProductsProps> = () => {
    const products : any = [
        {id: 1, name: "Laptop", price: 5000},
        {id: 2, name: "Earphone", price: 210},
        {id: 3, name: "DOK", price: 60}
    ]

    // const products: any = []

    
    //ternary if נעשה דוגמה עם 
   return (<>
   <h2>Our Products</h2>
   {products.length ? (products.map((product: any) => (<div key={product.id}>{product.name}, {product.price}</div>))) : (<p>Theres no products</p>)}</>);



    {/* map=עוברת על כל אחד מהאיברים במערך  */}
    {/*(product:any)=any בכל איטרציה נקבל מוצר יחיד מסוג */}
    {/* key= id מאפיין יחודי שיש לכל אחד מהאיברים במערך וזה  */}
    // {products.map((product:any)=>(
    //     <div key={product.id}>
    //         {product.name},{product.price}
    //     </div>
    // ))}
   
    // </> );
}
 
export default Products;