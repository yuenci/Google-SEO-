import os


def get_articles():
    articles = []
    for file in os.listdir("articles"):
        with open(os.path.join("articles", file)) as f:
            articles.append(split_title_and_content(f.read()))
    return articles


def split_title_and_content(article):
    title = article.split("\n")[0].replace("#", "").strip()
    content = article.split("\n")[1:]
    content = "\n".join(content).replace("\n", "")
    return [title, content]


def get_articles_name():
    articles = []
    for file in os.listdir("articles"):
        articles.append(file)
    return articles


# print(get_articles_name())
