# member list

This repo is for SITW members.


## add your data by the data format

EXAMPLE:

```
{
  "name": "chilijung",
  "email": "chilijung@gmail.com",
  "github-id": "chilijung",
  "twitter-id": "chilijung",
  "facebook-id": "lirong.ji",
  "department": "IIM",
  "class": 103,
  "skill": "website development, mostly coding nodejs, javscript.... . Also learned PHP, Perl...",
  "description": "I like web, and think web is a powerful tool to change the word"
}

```

in `member.json`

# Developer

要改檔案請在 `jade` 檔改，先安裝 `jade`

    $ npm install jade -g

然後打

    $ jade <your jade file>

如果不想要每次改完 jade 都要去跑一次可以加 `-w`，每更動一次 jade 他會自己 render

    $ jade -w <your jade file>

for example:

    $ jade index.jade

他會自動的 render `index.html`


## Contribute

### Set up enviroment:
```
$ npm install
$ node app.js
```

### Open browser
[http://localhost:8080](http://localhost:8080)

## Author

[@chilijung](https://github.com/chilijung)

## Contributers

[@garylai1990](https://github.com/garylai1990)
Feel free to add by your own!

# License

© 2013, Lijung Chi. Released under the [MIT License](http://opensource.org/licenses/mit-license.php).
