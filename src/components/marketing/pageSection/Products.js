import React from "react";
import Container from "../../elements/Container";
import HeadingTitle from "../../elements/HeadingTitle";
import Heading from "../../elements/Heading";
import Button from "../../elements/Button";
import Product1 from '../../../medias/images/products/product-1.jpg';
import Product2 from '../../../medias/images/products/product-2.jpg';
import Product3 from '../../../medias/images/products/product-3.jpg';

export default function Products() {
  return (
    <Container>
      <HeadingTitle variant="h3">Toujours des délicieuux burgers</HeadingTitle>

      <Heading theme="secondary">Choisissez et savourez</Heading>

      <p className="text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac dolor
        sit amet lorem imperdiet lacinia eget a augue. Donec a viverra massa.
        Quisque placerat felis et lobortis sagittis. Praesent venenatis velit
        vel orci vehicula consectetur.
      </p>

      <div className="grid grid-cols-3 gap-x-1 mb-20 mt-10">

        <div className="w-full h-full">{/* Start col-1 */}

          <div className="relative w-full h-72">
            <img
              className="bg-primary absolute top-0 left-0 w-full h-full object-cover z-0"
              src={ Product1 }
              alt="Product 1"
            />
          </div>
          <div className="flex flex-col items-center justify-center px-5 pb-5">
            <Heading variant="h3" theme="secondary">
              Lorem ipsum dolor
            </Heading>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <Button color="danger" className="font-secondary">
              Commandez
            </Button>
          </div>
        </div>
        {/* End col-1 */}
 
        <div className="w-full h-full">
          {/* Start col-2 */}

          <div className="relative w-full h-72">
            <img
              className="bg-primary absolute top-0 left-0 w-full h-full object-cover z-0"
              src={ Product2 }
              alt="Product 2"
            />
          </div>
          <div className="flex flex-col items-center justify-center px-5 pb-5">
            <Heading variant="h3" theme="secondary">
              Lorem ipsum dolor
            </Heading>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <Button color="danger" className="font-secondary">
              Commandez
            </Button>
          </div>
        </div>
        {/* End col-2 */}

        <div className="w-full h-full">
          {/* Start col-3 */}

          <div className="relative w-full h-72">
            <img
              className="bg-primary absolute top-0 left-0 w-full h-full object-cover z-0"
              src={ Product3 }
              alt="Product 3"
            />
          </div>
          <div className="flex flex-col items-center justify-center px-5 pb-5">
            <Heading variant="h3" theme="secondary">
              Lorem ipsum dolor
            </Heading>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <Button color="danger" className="font-secondary">
              Commandez
            </Button>
          </div>
        </div>
        {/* End col-3 */}
      </div>
    </Container>
  );
}
