const proData = [
    // Shirts (8 items)
    // { id: 1, title: 'Casual Shirt', price: 20, category: 'Shirts', description: 'Comfortable and stylish.', image: 'https://focusclothing.pk/cdn/shop/files/79a_1880x.jpg?v=1701259136' },
    // { id: 6, title: 'Slim Fit Shirt', price: 25, category: 'Shirts', description: 'Perfect for daily wear.', image: 'https://plus.unsplash.com/premium_photo-1678218594563-9fe0d16c6838?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hpcnR8ZW58MHx8MHx8fDA%3D' },
    // { id: 7, title: 'Printed Shirt', price: 22, category: 'Shirts', description: 'Trendy patterns.', image: 'https://plus.unsplash.com/premium_photo-1718913931807-4da5b5dd27fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dCUyMHNoaXJ0fGVufDB8fDB8fHww' },
    // { id: 8, title: 'Striped Shirt', price: 27, category: 'Shirts', description: 'Classic striped design.', image: 'https://plus.unsplash.com/premium_photo-1673356301514-2cad91907f74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dCUyMHNoaXJ0fGVufDB8fDB8fHww' },
    // { id: 9, title: 'Cotton Shirt', price: 18, category: 'Shirts', description: 'Soft and breathable.', image: 'https://media.istockphoto.com/id/483960103/photo/blank-black-t-shirt-front-with-clipping-path.webp?a=1&b=1&s=612x612&w=0&k=20&c=NTCM2_bRKf-LaZdvQGzpOxG95TDtXM0xN4KW7EsTLhM=' },
    // { id: 10, title: 'Plaid Shirt', price: 24, category: 'Shirts', description: 'Perfect for casual outings.', image: 'https://plus.unsplash.com/premium_photo-1684952850890-08b775d7bc2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dCUyMHNoaXJ0JTIwZGVzaWdufGVufDB8fDB8fHww' },
    // { id: 11, title: 'Denim Shirt', price: 30, category: 'Shirts', description: 'Durable and rugged.', image: 'https://media.istockphoto.com/id/1505104024/photo/white-mens-t-shirt-mockup-3d-rendering-sports-shirt-for-design-pattern-front-side-view-set.webp?a=1&b=1&s=612x612&w=0&k=20&c=H-hf06U0CEHBRFgyQ7f_emXC9nGJ7JdaL7asG44_bbk=' },
    // { id: 12, title: 'Classic Shirt', price: 20, category: 'Shirts', description: 'Timeless design.', image: 'https://focusclothing.pk/cdn/shop/files/8a_6d4b7a0e-9e6c-45eb-9a15-13abe61fde37_1880x.jpg?v=1698230866' },
  
    // Pants & Jeans (8 items)
    { id: 2, title: 'Blue Mid Wash Denim', price: 30, category: 'Pants & Jeans', description: ' perfect for any day.', image: 'https://focusclothing.pk/cdn/shop/files/01_0001_1Y0A8955-A.jpg?v=1698485828https://focusclothing.pk/cdn/shop/files/14a_028dee41-68da-4474-a3c6-8eb1db24d61e_1880x.jpg?v=1721465350' },
    { id: 13, title: 'Boy Black Denim', price: 35, category: 'Pants & Jeans', description: 'Our Black Denim for boys is the go-to choice for kids.', image: 'https://focusclothing.pk/cdn/shop/files/53a_e8f31eac-2ff2-404e-b2cc-c891e5440745.jpg?v=1709646836' },
    { id: 14, title: 'Royal Blue Denim Pants', price: 40, category: 'Pants & Jeans', description: 'Functional and stylish.', image: 'https://focusclothing.pk/cdn/shop/files/01_0019_1Y0A8931-A.jpg?v=1694856076' },
    { id: 15, title: 'Boy Blue Denim', price: 28, category: 'Pants & Jeans', description: 'Our Blue Denim for boys is the go-to choice for kids.', image: 'https://focusclothing.pk/cdn/shop/files/52a_9a9a58fd-1bbc-47d7-9a70-3983a0359245.jpg?v=1709646617' },
    // { id: 16, title: 'Straight Leg Pants', price: 32, category: 'Pants & Jeans', description: 'Classic style.', image: 'https://focusclothing.pk/cdn/shop/files/3b_170e7a6f-c3fd-4349-8d3d-b02c49bf721b_1880x.jpg?v=1721464919' },
    // { id: 17, title: 'Distressed Jeans', price: 38, category: 'Pants & Jeans', description: 'Casual and edgy.', image: 'https://focusclothing.pk/cdn/shop/files/14a_028dee41-68da-4474-a3c6-8eb1db24d61e_1880x.jpg?v=1721465350' },
    // { id: 18, title: 'Chinos', price: 25, category: 'Pants & Jeans', description: 'Lightweight and breathable.', image: 'https://focusclothing.pk/cdn/shop/files/1b_6cb98e07-7955-4b66-8d59-1bebefa736ed_1880x.jpg?v=1721464937' },
    // { id: 19, title: 'Skinny Jeans', price: 36, category: 'Pants & Jeans', description: 'Form-fitting and sleek.', image: 'https://focusclothing.pk/cdn/shop/files/23b_4a0c9e46-a1f9-403f-baac-6b76dfa0c6d9_1880x.jpg?v=1724392076' },
  
    // T-shirts (8 items)
    { id: 3, title: 'Grey Jogger Pants', price: 15, category: 'Trouser', description: 'Grey Jogger Pants for Boys feature a stretchy waistband with draw cords designed for a comfortable fit.', image: 'https://focusclothing.pk/cdn/shop/files/46a_da1d6967-6ae9-41d1-873a-2c2145e916c3.jpg?v=1709636893' },
    { id: 20, title: 'Maroon Pants', price: 12, category: 'Trouser', description: 'Maroon Pants for Boys, a versatile and stylish addition to any young gentleman wardrobe.', image: 'https://focusclothing.pk/cdn/shop/files/50a.jpg?v=1709638423' },
    { id: 21, title: 'Grey Black Trousers', price: 18, category: 'Trouser', description: 'Cool Trousers are comfortable, stylish, and perfect for play.', image: 'https://focusclothing.pk/cdn/shop/files/109a.jpg?v=1701677408' },
    { id: 22, title: 'White Basic Trousers', price: 14, category: 'Trouser', description: 'White Basic Trousers for Boys, a versatile and stylish addition to any young gentleman wardrobe', image: 'https://focusclothing.pk/cdn/shop/files/6a_1_753cf29a-2a60-4bda-b24e-3c8c4c5bd37a.jpg?v=1710587856' },
    // { id: 23, title: 'Henley T-shirt', price: 20, category: 'T-shirts', description: 'Unique and trendy.', image: 'https://focusclothing.pk/cdn/shop/files/77_4eab4da3-0e52-43e1-909c-f1e727252526_670x.jpg?v=1692606126' },
    // { id: 24, title: 'Long Sleeve T-shirt', price: 17, category: 'T-shirts', description: 'Perfect for cooler days.', image: 'https://focusclothing.pk/cdn/shop/products/92_ecb13c76-d361-41d7-8527-cd1c1ca4cb70_640x.jpg?v=1635520634' },
    // { id: 25, title: 'Striped T-shirt', price: 19, category: 'T-shirts', description: 'Playful and stylish.', image: 'https://focusclothing.pk/cdn/shop/files/44b_bc2da713-fcf0-4af9-9b65-e4be83fe3027_1880x.jpg?v=1721464080' },
    // { id: 26, title: 'Pocket T-shirt', price: 16, category: 'T-shirts', description: 'Practical and casual.', image: 'https://focusclothing.pk/cdn/shop/files/9b_8011f062-43c2-4b0c-85e2-3805f274acfa_1880x.jpg?v=1724244959' },
  
  
//     // Sale (8 items)
//     { id: 5, title: 'Discount Hoodie', price: 25, category: 'Sale', description: 'Stylish hoodie on sale.', image: 'https://focusclothing.pk/cdn/shop/files/400_x_400_32.jpg?v=1710416014' },
//     { id: 34, title: 'Clearance Jeans', price: 20, category: 'Sale', description: 'Unbeatable price.', image: 'https://focusclothing.pk/cdn/shop/products/IMG_1651_665x.jpg?v=1655981402' },
//     { id: 35, title: 'Sale Shirt', price: 18, category: 'Sale', description: 'Casual and discounted.', image: 'https://focusclothing.pk/cdn/shop/files/67a_1880x.jpg?v=1698323231' },
//     { id: 36, title: 'Markdown T-shirt', price: 15, category: 'Sale', description: 'Affordable and trendy.', image: 'https://focusclothing.pk/cdn/shop/files/18_eadd7cb4-c8aa-4748-97f1-a90d45310f04_670x.jpg?v=1716298741' },
//     { id: 37, title: 'Sale Pants', price: 22, category: 'Sale', description: 'Great value.', image: 'https://focusclothing.pk/cdn/shop/files/20a_f53b9f5d-989a-439a-8ab5-f9c3ffc30800_1880x.jpg?v=1721464602' },
//     { id: 38, title: 'Promo Jacket', price: 45, category: 'Sale', description: 'Fashionable and discounted.', image: 'https://focusclothing.pk/cdn/shop/files/24a_ab40767c-d12e-4674-aea1-11b7523c2703_1880x.jpg?v=1705398360' },
//     { id: 39, title: 'Discounted Blazer', price: 35, category: 'Sale', description: 'Stylish and affordable.', image: 'https://focusclothing.pk/cdn/shop/files/IMG_9086copy_1880x.jpg?v=1731563020' },
//     { id: 40, title: 'Clearance Hoodie', price: 23, category: 'Sale', description: 'Cozy and cheap.', image: 'https://focusclothing.pk/cdn/shop/files/14a_a2a4a6a8-4769-4186-8b43-260eeb463fe0_1880x.jpg?v=1731571830' },
  
//     // Winter
//     // Sale (8 items)
//     { id: 6, title: 'Zipper Hoodie', price: 25, category: 'Winter', description: 'Upgrade your casual style with the Zipper Hoodie.', image: 'https://focusclothing.pk/cdn/shop/files/IMG_8883copy_21d96a9a-c978-454e-8996-0dd6e0e4099e_1880x.jpg?v=1732601339' },
//     { id: 41, title: 'Multi Patch Sweat Shirt', price:22, category: 'Winter', description: 'Express your style with this Multi Patch Sweatshirt, featuring unique, eye-catching patch designs.', image: 'https://focusclothing.pk/cdn/shop/files/IMG_8650copy.jpg?v=1732601057' },
//     { id: 42, title: 'Dirty Blue Denim Jacket', price: 20, category: 'Winter', description: 'This outfit is super roomy- it loose around your shoulders and waist, and longer than regular shirts.', image: 'https://focusclothing.pk/cdn/shop/files/IMG_9006copy_66e7b711-8279-419c-b634-168d95815391.jpg?v=1731654254' },
//     { id: 43, title: 'lozrenzo topcoat', price: 15, category: 'Winter', description: 'Step out in style with the Lorenzo Topcoat, crafted from premium materials for a refined and sophisticated look.', image: 'https://focusclothing.pk/cdn/shop/files/IMG_9241copy.jpg?v=1731650832' },
//     { id: 44, title: 'Lakers Hoodie', price: 18, category: 'Winter', description: 'A hoodie that hugs just right. cozy in the hood and body, no overbearing tightness.', image: 'https://focusclothing.pk/cdn/shop/files/31a_5e424f15-d86b-478b-96d3-f4e8fc5c133d_1880x.jpg?v=1699127786' },
//     { id: 45, title: 'Black Hoodie Upper', price: 30, category: 'Winter', description: 'hoodie that hugs just right. cozy in the hood and body, no overbearing tightness.', image: 'https://focusclothing.pk/cdn/shop/files/15a_a299b82a-e6f5-401a-8bd6-90b771d753a3.jpg?v=1699515792' },
//     { id: 46, title: 'Paneled Hooded Upper', price: 28, category: 'Winter', description: 'A hoodie that hugs just right. cozy in the hood and body, no overbearing tightness.', image: 'https://focusclothing.pk/cdn/shop/files/16a_b41db3b3-abc8-40b1-b9a3-6d1c2f92e3a7_1.jpg?v=1701686259' },
//     { id: 47, title: 'lozrenzo topcoat', price: 23, category: 'Winter', description: 'Step out in style with the Lorenzo Topcoat, crafted from premium materials for a refined and sophisticated look. ', image: 'https://focusclothing.pk/cdn/shop/files/IMG_9234copy.jpg?v=1731650832' },
   ];
  
  export default proData;
  