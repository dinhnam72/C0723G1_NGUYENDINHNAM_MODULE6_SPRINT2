create database badminton;
use badminton;

create table roles(
id int primary key auto_increment,
`role` varchar(20) not null
);
create table accounts(
id int primary key auto_increment,
usename varchar(30) not null,
`password` varchar(30) not null
);
create table role_accounts(
id int primary key auto_increment,
id_account int not null,
id_role int not null,
 foreign key(id_account) references accounts(id),
 foreign key(id_role) references roles(id)
);
create table users(
id int primary key auto_increment,
`code` varchar(15) not null,
`name` varchar(100) ,
dob date ,
email varchar(50),
phone varchar(12),
gender bit(1),
address varchar(255),
id_account int,
 foreign key(id_account) references accounts(id)
);


create table type_products(
id int primary key auto_increment,
`name` varchar(100) not null
);
create table trademarks(
id int primary key auto_increment,
`name` varchar(100) not null
);


create table products(
id int primary key auto_increment,
`code` varchar(15) not null,
`name` varchar(100) not null,
main_image varchar(255) not null,
quantity int not null,
color varchar(50),
length double ,
weight double,
hardness varchar(100),
handle_circumference varchar(10),
maximum_tension_level varchar(10),
id_trademark int not null,
id_type_product int not null,
is_delete bit(1) default 1,
foreign key(id_trademark) references trademarks(id),
foreign key(id_type_product) references type_products(id)
);
create table cart(
id int primary key auto_increment,
id_user int unique not null,
amount int,
is_delete bit(1) default 1,
 foreign key(id_user) references users(id)
);
create table sizes(
id int primary key auto_increment,
`name` varchar(20) not null
);
create table size_details(
id int primary key auto_increment,
id_product int not null,
id_size int not null,
start_price double not null,
promotional_price double,
id_cart int not null,
foreign key(id_product) references products(id),
foreign key(id_size) references sizes(id),
foreign key(id_cart) references cart(id)
);

create table secondary_image(
id int primary key auto_increment,
image_one varchar(255),
image_two varchar(255),
image_three varchar(255),
id_product int not null,
foreign key(id) references products(id)
);


create table orders(
id int primary key auto_increment,
`date` date not null,
id_user int not null,
 foreign key(id_user) references users(id)
);

create table order_detail(
id int primary key auto_increment,
id_order int not null,
id_product int not null,
amount int not null,
price double not null,
 foreign key(id_order) references orders(id),
 foreign key(id_product) references products(id)
);


