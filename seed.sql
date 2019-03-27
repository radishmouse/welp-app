insert into users
    (first_name, last_name, email, password)
values
    ('Lady', 'Godiva', 'chocobessed@hotmail.com', 'nakedtruth!'),
    ('Nicolas', 'Flamel', 'tomorrowneverdies@netscape.net', 'g3t570n3d'),
    ('Cruella', 'DeVille', 'puppypower@yahoo.com', 'SpotsSpotsSpots'),
    ('Lennie', 'Small', 'bunnybuddy@outlook.com', 'nonAlgern0n')
;

insert into restaurants
    (name, address, street, city, state, phone, menu, picture)
values
    ('Chilis', '123 Main Street, Acworth, GA, 30102', '123 Main Street', 'Acworth', 'Georgia', '6785551234', 'https://www.chilis.com/menu', 'https://www.nrn.com/sites/nrn.com/files/styles/article_featured_standard/public/22_Chilis_9.jpg?itok=cgSeEjJE'),
    ('AppleBees', '456 South Road, Kennesaw, GA, 30152', '456 South Road', 'Kennesaw', 'Georgia', '4041231234', 'https://www.applebees.com/en/menu/pasta-seafood-and-more', 'https://www.alexslemonade.org/sites/default/files/ab_brand_refresh_logo_cmyk_gray_r.png'),
    ('Ruby Tuesday', '555 5th street, Acworth, GA, 30102', '555 5th Street', 'Acworth', 'Georgia', '4705552424', 'https://www.rubytuesday.com/menu', 'https://www.nrn.com/sites/nrn.com/files/styles/article_featured_standard/public/uploads/2016/11/ruby-tuesday-exterior-promo.png?itok=kWp2hs8F'),
    ('Golden Corral', '434 Happy Lane, Kennesaw, GA, 30144', '434 Happy Lane', 'Kennesaw', 'Georgia', '7709994444', 'https://togo.goldencorral.com/menu', 'https://www.sistersonthefly.com/wp-content/uploads/2019/01/golden-corral-prices.jpg')
;

insert into reviews
    (score, content, restaurant_id, user_id)
values
    (4, 'The char on my steak was as black as my soul. Cant recommend this place enough!', 3, 3),
    (4, 'The char on my steak was as black as my soul. Cant recommend this place enough!', 2, 3),
    (4, 'The char on my steak was as black as my soul. Cant recommend this place enough!', 1, 3),
    (5, 'I like the water that was yellow and bubbly. Ive never had Coors b4!', 1, 4),
    (1, 'Never in my (very long) life have I had such a bad meal. I dont know where the chef studied, but the cuisine has a hallmark Durmstang flavor to it. Blech!', 4, 2),
    (3, 'Not my black forest cake, but certainly serviceable. A little fussy looking, but tastes just fine once you strip away all the dressing.', 2, 1)
;

insert into favorites
    (user_id, restaurant_id)
values
    (3, 3),
    (4, 1),
    (1, 2),
    (2, 4)
;