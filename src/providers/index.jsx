import { AuthenticationProvider } from "./Authentication";
import { CartProvider } from "./CartProvider";
import { ProductsProvider } from "./Products";
import { CepProvider } from "./CepProvider";

const Providers = ({ children }) => {
    return (
        <AuthenticationProvider>
            <CartProvider>
                <ProductsProvider>
                    <CepProvider>
                            {children}
                    </CepProvider>
                </ProductsProvider>
            </CartProvider>
        </AuthenticationProvider>
    );
  };
  
  export default Providers;