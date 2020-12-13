import{Controller , Post , Body, Get} from '@nestjs/common';
import{ProductsService} from './products.service';
@Controller('products')
export class ProductsController{

    constructor(private productsService : ProductsService){}
    @Post()
    addProduct(@Body('title') postTitle : string, @Body('description') postDescription : string, @Body('price') postPrice : number)  
    {
      const generatedProd = this.productsService.insertProduct(postTitle , postDescription , postPrice);
      return { addedProduct : generatedProd };
    }

    @Get()
    getAllProducts(){
        return this.productsService.getAllProducts();

    }

    getProduct(@Body('title') title:string){
        return this.productsService.getProduct(title);
    }
}