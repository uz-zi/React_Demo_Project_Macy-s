import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Menlist from './componenets/men_list.jsx';
import Womenlist from './componenets/women_list.jsx';
import Kidslist from './componenets/kids&baby_list.jsx';
import Categories from './componenets/categories.jsx';
import Filters from './componenets/filters.jsx';
import ProductCard from './componenets/product_card.jsx';
import Toppage from './componenets/toTopPage.jsx';
import ShippingToSidebar from './componenets/shipping_to_sidebar.jsx';
import Header1 from './componenets/header1.jsx';
import Nav1 from './componenets/nav1.jsx';
import Nav2 from './componenets/nav2.jsx';
import MensClothing from "./componenets/Men's Clothing&Accessories_AllMen'sClothing_Shirts&hrefps_Dress Shirts.jsx";
import Header2 from './componenets/header2.jsx';
import Footer from './componenets/footer.jsx';

import SmallSecreenHead from './componets2/smaller_secreen.jsx';
import SmallSecrreenSideNav from './componets2/newlists.jsx';
import SmallSecrreenSideNavSublist from './componets2/sidenav_lists_sublist.jsx';

test('App matches snapshot', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});

test('Menlist matches snapshot', () => {
  const { asFragment } = render(<Menlist />);
  expect(asFragment()).toMatchSnapshot();
});

test('Womenlist matches snapshot', () => {
  const { asFragment } = render(<Womenlist />);
  expect(asFragment()).toMatchSnapshot();
});

test('Kidslist matches snapshot', () => {
  const { asFragment } = render(<Kidslist />);
  expect(asFragment()).toMatchSnapshot();
});

test('Categories matches snapshot', () => {
  const { asFragment } = render(<Categories />);
  expect(asFragment()).toMatchSnapshot();
});

test('Filters matches snapshot', () => {
  const { asFragment } = render(<Filters />);
  expect(asFragment()).toMatchSnapshot();
});

test('ProductCard matches snapshot', () => {
  const { asFragment } = render(<ProductCard />);
  expect(asFragment()).toMatchSnapshot();
});

test('Toppage matches snapshot', () => {
  const { asFragment } = render(<Toppage />);
  expect(asFragment()).toMatchSnapshot();
});

test('ShippingToSidebar matches snapshot', () => {
  const { asFragment } = render(<ShippingToSidebar />);
  expect(asFragment()).toMatchSnapshot();
});

test('Header1 matches snapshot', () => {
  const { asFragment } = render(<Header1 />);
  expect(asFragment()).toMatchSnapshot();
});

test('Nav1 matches snapshot', () => {
  const { asFragment } = render(<Nav1 />);
  expect(asFragment()).toMatchSnapshot();
});

test('Nav2 matches snapshot', () => {
  const { asFragment } = render(<Nav2 />);
  expect(asFragment()).toMatchSnapshot();
});

test('MensClothing matches snapshot', () => {
  const { asFragment } = render(<MensClothing />);
  expect(asFragment()).toMatchSnapshot();
});

test('Header2 matches snapshot', () => {
  const { asFragment } = render(<Header2 />);
  expect(asFragment()).toMatchSnapshot();
});

test('Footer matches snapshot', () => {
  const { asFragment } = render(<Footer />);
  expect(asFragment()).toMatchSnapshot();
});

test('SmallSecreenHead matches snapshot', () => {
  const { asFragment } = render(<SmallSecreenHead />);
  expect(asFragment()).toMatchSnapshot();
});

test('SmallSecrreenSideNav matches snapshot', () => {
  const { asFragment } = render(<SmallSecrreenSideNav />);
  expect(asFragment()).toMatchSnapshot();
});

test('SmallSecrreenSideNavSublist matches snapshot', () => {
  const { asFragment } = render(<SmallSecrreenSideNavSublist />);
  expect(asFragment()).toMatchSnapshot();
});
