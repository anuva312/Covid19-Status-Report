# Covid19 Status Report
This project was created as part of the Web Technologies Course under B.Tech certication at Vidya Academy of Science and Technology. It is an attempt to reformat openly available covid-19 data and make it accessible to everyone with an internet connection.
## Installation
### Linux
1. Clone the repository into /var/www/ or /var/www/html using
```
git clone https://gitlab.com/remarkable-pebbles/covid19-status-report.git
```
Or
```
git clone git@gitlab.com:remarkable-pebbles/covid19-status-report.git
```
Or you download the zip file as well.
2. Create a database named cov_data in your sql.
In SQL,
```
mysql> create database cov_data;
```
3. Import the database.sql file to your own mysql.
```
mysql -u USERNAME -p cov_data < database.sql
```
4. Create a user with username 'webhost' and password as 'webdev' and grant it select privilege on cov_data.
```
mysql> CREATE USER 'webhost'@'localhost' IDENTIFIED BY 'webdev';
mysql> GRANT SELECT ON cov_data . * TO 'webhost'@'localhost';
```
5. Now, in your browser type in localhost/covid19-status-report/.
It sould open up the index.html. Feel free to copy the files on coid19-status-report to the parent directory. Then index.html should show up when localhost is typed.
## Pages
There are 5 pages is this website :
1. Home - index.html
    It contains the total number of cases reported, confirmed and deaths globally and by default in US.
    It also provides a search box that can be used to look up the data of  country of your choice.
2. All countries - all_countries.html
    It shows a summary of all the available data from each country.
3. Daily Changes - daily_changes.html
    It shows the data of each data from the first reported date to today. By default, it is set to US. The country of your choice can be selected in the home page.
4. Symptoms - symptopms.html
    It contains some information about symptoms associated with Covid-19.
5. Prevention - prevention.html
    It contains some information about preventive measures that can be taken against Covid-19.