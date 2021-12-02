#設置客戶端連接服務器端編碼為utf8
SET NAMES UTF8;
#丟棄數據庫，如果有存在
DROP DATABASE IF EXISTS myprojust;
#創建數據庫，設置存儲編碼utf8
CREATE DATABASE myprojust CHARACTER SET = utf8 COLLATE = utf8_unicode_ci;;
#進入數據庫
USE myprojust;
#創建數據保存表 a商品資料表
CREATE TABLE productdata (
    lid int PRIMARY KEY AUTO_INCREMENT,
    lname VARCHAR (200),
    title VARCHAR (500),
    detail VARCHAR (5000),
    price INT,
    discount INT,
    img VARCHAR (20)
);

#插入數據
INSERT INTO productdata VALUES
(1,'100%&400%set BE@RBRICK Andy Warhol×JEAN-MICHEL BASQUIAT#2','BE@RBRICK/庫柏力克熊',
'"※退貨時需保持外盒完整包裝。※商品表面因為製作過程多少會些許痕跡/小刮痕產生，外盒從海外空運來台，物流運送過程中難免會受到擠壓，敬請見諒 !(若對於商品標準較高者，建議下單前請三思)商品編號：PSJ21040003S6"',
7700,7480,'/img/41.png');
INSERT INTO productdata VALUES
(2,'100% & 400%set BE@RBRICK Andy Warhols Muhammad Ali','BE@RBRICK/庫柏力克熊',
'"※退貨時需保持外盒完整包裝。※商品表面因為製作過程多少會些許痕跡/小刮痕產生，外盒從海外空運來台，物流運送過程中難免會受到擠壓，敬請見諒 !(若對於商品標準較高者，建議下單前請三思)商品編號：PSJ21040003S6"',
8600,7480,'/img/42.png');
INSERT INTO productdata VALUES
(3,'100%&400%set 100％ & 400％ set BE@RBRICK Flying ','BE@RBRICK/庫柏力克熊',
'"※退貨時需保持外盒完整包裝。※商品表面因為製作過程多少會些許痕跡/小刮痕產生，外盒從海外空運來台，物流運送過程中難免會受到擠壓，敬請見諒 !(若對於商品標準較高者，建議下單前請三思)商品編號：PSJ21040003S6"',
82000,7480,'/img/43.png');
INSERT INTO productdata VALUES
(4,'100%&400% set BE@RBRICK First Generation Tiger MaskFirst','BE@RBRICK/庫柏力克熊',
'"※退貨時需保持外盒完整包裝。※商品表面因為製作過程多少會些許痕跡/小刮痕產生，外盒從海外空運來台，物流運送過程中難免會受到擠壓，敬請見諒 !(若對於商品標準較高者，建議下單前請三思)商品編號：PSJ21040003S6"',
89800,7480,'/img/44.png');
INSERT INTO productdata VALUES
(5,'400% BE@RBRICK WONDER WOMAN GOLDEN ARMOR','BE@RBRICK/庫柏力克熊',
'"※退貨時需保持外盒完整包裝。※商品表面因為製作過程多少會些許痕跡/小刮痕產生，外盒從海外空運來台，物流運送過程中難免會受到擠壓，敬請見諒 !(若對於商品標準較高者，建議下單前請三思)商品編號：PSJ21040003S6"',
8100,7480,'/img/45.png');


#創建數據表 b 購物車資料表 
CREATE TABLE shoppdata(
    id INT PRIMARY KEY AUTO_INCREMENT,
    lid INT,
    price INT,
    count INT,
    lname VARCHAR(255),
    useruuid  VARCHAR(50),
    img VARCHAR(300)
);

      



#創建數據表 c 訂單主表
CREATE TABLE orderprimary(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname varchar (10) UNIQUE,
    phone char (10),
    ddress varchar (32)
);
#插入數據




#創建數據表 d 訂單明細表 
CREATE TABLE orderlist(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    list INT,
    productid INT,
    count INT
);

INSERT INTO orderlist VALUES();






