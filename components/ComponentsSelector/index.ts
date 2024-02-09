import {
  HomepageAdvices,
  HomepageAdvicesSchema,
  HomepageCategories,
  HomepageCategoriesSchema,
  HomepageHeroVideo,
  HomepageHeroVideoSchema,
  HomepagePeople,
  HomepagePeopleSchema,
  HomepageProducts,
  HomepageProductsSchema,
} from '@/components/Homepage';
import { v4 as uuidv4 } from 'uuid';
import zod from 'zod';

export enum ComponentsEnum {
  HERO_VIDEO = 'hero-video',
  // HERO_IMAGE = 'hero-image',
  // HERO_TEXT = 'hero-text',
  CATEGORIES = 'categories',
  PRODUCTS = 'products',
  ADVICES = 'advices',
  PEOPLE = 'people',
  // CONTACT_FORM = 'contact-form',
  // SHOP_CARD = 'shop-card',
}

export type ComponentMappingData = {
  component: React.FC<any>;
  getConfig: () => ComponentConfigBase;
};

export type ComponentConfigBase = {
  schema: zod.ZodObject<any>;
};

export type ComponentConfig = ComponentConfigBase & {
  name: ComponentsEnum;
  id: string;
};

export const componentsMapping: {
  [K in ComponentsEnum]: ComponentMappingData;
} = {
  [ComponentsEnum.HERO_VIDEO]: {
    component: HomepageHeroVideo,
    getConfig: () => ({
      schema: HomepageHeroVideoSchema,
    }),
  },
  [ComponentsEnum.CATEGORIES]: {
    component: HomepageCategories,
    getConfig: () => ({
      schema: HomepageCategoriesSchema,
    }),
  },
  [ComponentsEnum.PRODUCTS]: {
    component: HomepageProducts,
    getConfig: () => ({
      schema: HomepageProductsSchema,
    }),
  },
  [ComponentsEnum.ADVICES]: {
    component: HomepageAdvices,
    getConfig: () => ({
      schema: HomepageAdvicesSchema,
    }),
  },
  [ComponentsEnum.PEOPLE]: {
    component: HomepagePeople,
    getConfig: () => ({
      schema: HomepagePeopleSchema,
    }),
  },
};

export const getComponentsList = () => {
  return Object.values(ComponentsEnum);
};

export const getComponent = (component: ComponentsEnum) => {
  return componentsMapping[component].component;
};

export const getComponentConfig: (
  component: ComponentsEnum,
) => ComponentConfig = (component: ComponentsEnum) => {
  return {
    ...componentsMapping[component].getConfig(),
    name: component,
    id: uuidv4(),
  };
};
