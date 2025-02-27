import matplotlib.pyplot as plt
from wordcloud import WordCloud
import json
import requests

# Fetch words from an external source (GitHub Issues, API, or a JSON file)
def fetch_words():
    url = "https://raw.githubusercontent.com/bprakashputta/bprakashputta/main/words.json"  
    response = requests.get(url)
    if response.status_code == 200:
        words_data = json.loads(response.text)
        return " ".join(words_data.get("words", []))  # Extract words from JSON
    return "GitHub Word Cloud Live Update"

# Generate the word cloud image
def generate_wordcloud():
    words = fetch_words()
    wordcloud = WordCloud(width=800, height=400, background_color="white").generate(words)

    # Save the word cloud image
    plt.figure(figsize=(10, 5))
    plt.imshow(wordcloud, interpolation="bilinear")
    plt.axis("off")
    plt.savefig("wordcloud.png", format="png", bbox_inches="tight")

if __name__ == "__main__":
    generate_wordcloud()
