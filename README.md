# Know your protein

***Know your protein*** is web application that allows secondary structure analysis of proteins based on their infrared spectras.

*This repository is responsible for client-side part of application. Server-side part of the app is available [here](https://github.com/jakubowski1005/know-your-protein-api).*


## Table of content

- [Description](#description)
- [Technologies, tools and libraries](#technologies-tools-and-libraries)
- [Author](#author)
- [Todo](#todo)

## Description

This project is my engineer's diploma project. The application would allow user to get content of specific secondary protein structures like alpha-helix or beta-sheet. Data would be calculated from Fourier Transform Infrared Spectroscopy results. Received data could be save in the database or save as PDF document.

The data would multistage processed:
- cut out important bands,
- smoothing and filtration,
- numerical differentiation,
- find peeks,
- fit structures,
- deconvolution,
- numerical integral

Client-side part of application would be responsible for CSV file parsing, data visualization and downloadiing/saving results.

## Technologies, tools and libraries ##

- NPM
- React 16.8.6
- Semantic UI
- Axios
- VictoryCharts

## Author

- Artur Jakubowski

## Todo

- [ ] Add docs
- [ ] Make page responsive
- [ ] Cleanup and refactor code
