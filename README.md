## Get HTML Code of a Website and Save it to a .html File
An easy way to get websites html code and save it to a .html file in a directory of your choice.
This program is built with node.js and uses puppeteer to get the html code of a website, as a bonus it also saves a png of the site to the same directory under the same timestamp as the html file so you can keep track of which png corresponds to what site.
## Installation
1. Download the repository
2. Open a terminal in the directory of the repository
3. Run the command `npm install` to install the dependencies
4. Create folder screenshots in the directory of the repository
5. Write in on line 5 const url = 'https://www.example.com'; the url of the website or sites you want to get the html code of - you can add multiple urls by separating them with a comma, save the index.js file.
5. Run the command `node index.js` to start the program, your html/png files will be saved in the directory of the repository under the directory screenshots.

## Diclaimer
This program is for educational purposes only, I am not responsible for any damage caused by this program. Some websites have a terms of service that does not allow you to scrape their website, so make sure you check the terms of service of the website you want to scrape before using this program, use this is an educational tool to learn how to scrape websites, my advice is to use your own website to test this program and learn how it works. 