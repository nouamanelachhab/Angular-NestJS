import {Injectable} from '@nestjs/common';
import{Product} from './product.model';

@Injectable()
export class ProductsService {
    private products :Product[] = [];

    insertProduct(title:string, description : string, price : number) {
        const productId = 1;
        const newProduct = new Product(productId.toString(), title, description, price);
        this.products.push(newProduct);
        return productId +" "+ title;
    }

    getAllProducts(){
        return this.products;
    }
    getProduct(pTitle:string){
        
        const product = new Product();
        return this.products;
    }
    
}