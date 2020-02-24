create database TheAgricultureNetwork;

use TheAgricultureNetwork;

select * from chemical_control;

create table users 
(
	first_name varchar(100) not null,
    last_name varchar(100) not null,
    email varchar(100) primary key,
    password varchar(100) not null
);

insert into users values ('Wajeeha', 'Parker', 'wajeeha.parker@gmail.com', 'w@123456');

create table crops
(
	id int primary key auto_increment,
    name varchar(100),
    kingdom varchar(100),
    phylum varchar(100),
    class varchar(100),
    c_order varchar(100),
    family varchar(100),
    genus varchar(100),
    cotyledon enum('monocot', 'dicot'),
    type enum('herb', 'shrub', 'tree', 'grass', 'vine'),
    season enum('Rabi', 'Kharif', 'Rabi, Kharif'),
    height varchar(100),
    leaf_size varchar(100),
    total_time varchar(100),
    water_consumption varchar(100),
    species varchar(100),
    sexuality enum('unisexual', 'bisexual'),
    climate_zone varchar(200),
    water_resources varchar(200),
    edible enum('Yes', 'No'),
    temperature varchar(100),
    humidity varchar(100),
    rainfall varchar(100),
    sunshine varchar(100),
    soil varchar(200),
    sowing_period varchar(100),
    fruiting_period varchar(100),
    province enum('Sindh', 'Punjab', 'Balochistan', 'KPK'),
    district varchar(100),
    fertilizers varchar(100),
    fer_dozes varchar(100)
);

insert into crops values (1, 'Apple', 'Plantea', 'Angiospermophyta', 'Magnoliopsida', 'Rosales', 'Rosaceae', 'Malus', 'dicot', 'tree', 'Kharif', '4-12 m', '3-10 cm', '50-80 yr', '70L/day (summer), 20L/day (autumn)', 'Malus sylvestris', 'bisexual', 'Temperate, Tropical', 'Rainfall', 'Yes', '32-45 F', '95%', '25-30 in/year', '6 or more hours', 'loamy, neutral pH (6-7), well drained, 12-18 in', 'late winter, early spring', 'September-October (after 2-10 years)', 'Punjab', 'Muree, Azad Kashmir, Malakand, Kalam, Swat', 'N:70, P:35, K:70', '10 kg/year');

create table districts
(
	name varchar(100),
    province enum('Sindh', 'Punjab', 'Balochistan', 'KPK')
);

insert into districts values
('Muree', 'Punjab'),
('Malakand', 'Punjab'),
('Kalam', 'Punjab'),
('Swat', 'Punjab'),
('Chitral', 'KPK'),
('Hazara', 'KPK'),
('Diamer', 'KPK'),
('Hangu', 'KPK'),
('Hyderabad', 'Sindh'),
('MirpurKhas', 'Sindh'),
('Badin', 'Sindh'),
('Thatta', 'Sindh'),
('Lasbela', 'Balochistan'),
('Sibi', 'Balochistan'),
('Quetta', 'Balochistan'),
('Ziarat', 'Balochistan');

create table pest
(
	id int primary key auto_increment,
    name varchar(100),
    biological_name varchar(100),
    type enum('fungus', 'insect', 'disease', 'bacteria', 'parasite', 'virus', 'animal', 'rodent')
);

insert into pest (name, biological_name, type) values('Powdery Mildew', 'Podosphaera tridactyla', 'fungus');

create table PestAndCrop
(
	crop int,
    pest int
);

insert into PestAndCrop values(1,1);

create table biological_control
(
	id int primary key auto_increment,
    predator int not null,
    prey int not null
);

insert into biological_control (predator, prey) values (1, 1);

create table chemical_control
(
	id int primary key auto_increment,
    insect int not null,
    description text
);

insert into chemical_control (insect, description) values (1, 'details');

create table mechanical_control
(
	id int primary key auto_increment,
    insect int not null,
    description text
);

insert into mechanical_control (insect, description) values (1, 'details');

create table cultural_control
(
	id int primary key auto_increment,
    insect int not null,
    description text
);

insert into cultural_control (insect, description) values (1, 'details');