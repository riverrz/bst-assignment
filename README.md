# BlueStacks assignment

Tech Stack used - ReactJS, Styled Components, Typescript, react-localization (for localization between english and hindi), react-calendar (for re-scheduling the date for a campaign).

### Live link - https://focused-volhard-82c4c4.netlify.app/

## Test cases -

| Description          | Execution Steps                                                                                              | Expected Output                                                                                                                       |
| -------------------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| Campaign type tabs   | Re-directing to home page                                                                                    | 3 campaign type tabs i.e. Upcoming, Live and Past Campaign tabs must be visible.                                                      |
| Campaign type tabs   | Clicking on individual tabs                                                                                  | Previously highlighted tab should become inactive and currently clicked should become active as represented in design.                |
| Localization         | Selecting a language from available language buttons                                                         | Header data,x days ago,x days ahead,Tabs text should noew be shown in the selected language.                                          |
| Campaign list items  | Clicking on a campaign's "Schedule again" button and selecting a date.                                       | The campaign's Date column should now show updated date.                                                                              |
| Campaign list items  | Clicking campaign type tabs                                                                                  | Campaign type list items should be visible in their correct category.                                                                 |
| Campaign date change | Clicking on a campaign's "Schedule again" button and selecting a date in past.                               | The campaign should now be removed from the current category and should be placed in "Past Campaign" category at appropriate row.     |
| Campaign date change | Clicking on a campaign's "Schedule again" button and selecting today's date.                                 | The campaign should now be removed from the current category and should be placed in "Live Campaign" category at appropriate row.     |
| Campaign date change | Clicking on a campaign's "Schedule again" button and selecting an upcoming date                              | The campaign should now be removed from the current category and should be placed in "Upcoming Campaign" category at appropriate row. |
| Campaign date change | Clicking on a campaign's "Schedule again" button and selecting a date but clicking on close instead of done. | The campaign's date should not be changed and it's position should remain unchanged.                                                  |
| Day difference       | Viewing a campaign item under a category                                                                     | The day difference in Date column should be correct with appropriate "ahead" or "ago" suffix.                                         |
| Details Popup        | Clicking on View button of a campaign under "View" column.                                                   | Details popup should appear with correct details and as per the design.                                                               |
| Text overflow        | Check a campaign with really big name                                                                        | The text should not overflow the column in both desktop and mobile view.                                                              |
| Responsive           | Using Chrome's dev tools enter responsive mode and refresh the page                                          | The UI should be responsive with proper spacing and no overflows.                                                                     |
