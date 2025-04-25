# Timecard copier
## Purpose
To deal with the nonsense of having to split my time into 4 different charge codes on CACI's timecare system, when the timecard system at my actual employer is simple and in a single table.

## Methodology
This will run as a Chrome plugin which will detect I browse to my current employer's timecard site and copy all the values for my current billable time to the clipboard automatically handling all splits
and computations for me.  This means I can enter my time, refresh the page, and then just go to CACI's website and do CTRL+V to paste in all the values accurately and easily.

## Future work
I would like to add the following features:
* Adjusting the charge code ratios via the UI in the pop-up
* Adding a button to my main timecard page to trigger the copy rather than doing it on every page load
* Adding a banner on my timecard telling me how far ahead/behind I am in hours
