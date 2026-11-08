# Language Learning Demo

A language learning demo built around reading.

The app lets you work through a text one word at a time. When you find a new word, you can select it, rate how well you know it, add a definition, and save it to the word database.

[View the live demo](https://lang-demo.vercel.app/)

## How It Works

The main reading view breaks the text into individual words. Selecting a word makes it active and opens the tools for that word.

You can rate a word from hard to well known. Saved words are highlighted based on their difficulty.

The app uses Compromise NLP to parse the text into individual terms that can be selected and tracked.

### Translate

The Translate tab is used to save the selected word and change its difficulty.

The translation button opens the selected word on WordReference.

### Details

The Details tab shows more information about the selected word.

### Database

The Database tab shows the words that have been saved.

The demo starts with example vocabulary for the Lorem Ipsum sample text. This is meant to show what the database can look like after the app has been used for a while.

### Settings

The Settings tab lets you change the sample text and translation direction.

The translation direction changes automatically when a new text is selected.

## Reading and Editing

The main page has two views.

The reading view is used to work through the current text and select words.

The edit view lets you change the content of the current page.

The footer is used to move between pages and switch between the reading and edit views.

## Demo Limitations

This project is only a demo.

There is no permanent backend database. Saved data is stored in the browser for the current session.

## Built With

| Purpose | Technology |
| --- | --- |
| Framework | Next.js |
| UI | React |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Components | Radix UI |
| Text parsing | Compromise NLP |
| Animation | Framer Motion |
| Tables | TanStack Table |

## Abbreviations

| Abbreviation | Meaning |
| --- | --- |
| wk | Well Known |
| de | German |
| en | English |
| fr | French |
| la | Latin |
| sp | Spanish |
