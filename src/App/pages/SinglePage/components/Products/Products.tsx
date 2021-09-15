import "./Products.css";
import { useLangContext } from "../..";
import ProductItem from "./ProductItem";
import product1 from "./products-01.jpg";
import product2 from "./products-02.jpg";
import product3 from "./products-03.jpg";

type productsTextType = {
  subtitle: string;
  title: string;
  description: string[];
};

const Products = () => {
  const langContext = useLangContext();
  const productsText: Record<string, Record<number, productsTextType>> = {
    en: {
      1: {
        subtitle: "NORMAL BLEND",
        title: "VENEER MIX 1-2-3-4",
        description: [
          "We take pride in our work, and it shows. Every time you order a MIX 1-2-3-4 from us, we guarantee that it will be as it is. No outsorting of 1-2 veneer. Appproximately 15% of 1-2 grade in a mix. Try it, you will be coming back for more.",
          "We are producing venner from 500 till 2600 mm long by log and 500 mm to 2600 mm width. Veneer thikness from 1.0 mm till 1.7 mm according GOST 99-2016. Humidity 4-8%.",
        ],
      },
      2: {
        subtitle: "YOU KNOW WHAT YOU WANT",
        title: "GRADE 5 (OBZOL)",
        description: [
          "We take pride in our work, and it shows. Every time you order a MIX 1-2-3-4 from us, we guarantee that it will be as it is. No outsorting of 1-2 veneer. Appproximately 15% of 1-2 grade in a mix. Try it, you will be coming back for more.",
          "We are producing venner from 500 till 2600 mm long by log and 500 mm to 2600 mm width. Veneer thikness from 1.0 mm till 1.7 mm according GOST 99-2016. Humidity 4-8%.",
        ],
      },
      3: {
        subtitle: "FOR SMALL SIZED GOODS",
        title: "VENEER SHEETS",
        description: [
          "We use special device for venner sheets packing. So our sheets pack is stout. Please visit us in person for more details.",
        ],
      },
    },
    ru: {
      1: {
        subtitle: "НОРМАЛЬНЫЙ МИКС",
        title: "МИКС 1-2-3-4",
        description: [
          "Мы гордимся своей продукцией. Каждый раз когда вы заказываете у нас микс шпона - мы гарантируем что он идет как он есть, без отсортировки 1-2 сорта.",
          "Примерный процент рубашки в миксе 15%. Попробуйте наш микс - Вы будете довольны!",
          "Мы лущим шпон от 500 до 2600 мм по длине волокна, и от 500 до 2600 мм в длину. Толщина шпона от 1 до 1.8 мм с допуском по толщине в соответствии с ГОСТ 99-2016. Влажность шпона 4-8%.",
        ],
      },
      2: {
        subtitle: "КАЖДЫЙ ПОЛУЧАЕТ ТО, ЧТО ХОЧЕТ",
        title: "ОБЗОЛ",
        description: [
          "Мы продаем обзол и сучок. Сучок - это 4 сорт с расширенным допуском по выпадающему сучку (до 9 сантиметров)",
        ],
      },
      3: {
        subtitle: "ДЛЯ ПРОИЗВОДСТВА НЕБОЛЬШИХ ИЗДЕЛИЙ",
        title: "КУСОК ШПОНА",
        description: [
          "Для упаковки куска используется специальное приспособление - пачка получается ровной и наполненной. Мы заботимся о своих клиентах!",
        ],
      },
    },
  };
  return (
    <div className="products" id="products">
      <ProductItem
        key={1}
        subtitle={productsText[langContext.lang][1].subtitle}
        title={productsText[langContext.lang][1].title}
        urlImage={product1}
        description={productsText[langContext.lang][1].description}
      />
      <ProductItem
        key={2}
        subtitle={productsText[langContext.lang][2].subtitle}
        title={productsText[langContext.lang][2].title}
        urlImage={product2}
        description={productsText[langContext.lang][2].description}
      />
      <ProductItem
        key={3}
        subtitle={productsText[langContext.lang][3].subtitle}
        title={productsText[langContext.lang][3].title}
        urlImage={product3}
        description={productsText[langContext.lang][3].description}
      />
    </div>
  );
};

export default Products;
