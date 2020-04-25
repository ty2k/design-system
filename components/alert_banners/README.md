---
description: Alert banners notify users of important information or changes on a page.
title: Alert Banners
author: dlevine
---

> Last Updated: April 24, 2020

# Alert Banners
Alert banners notify users of important information or changes on a page. Typically, they appear at the top of a page.

## Example
<component-preview path="components/alert_banners/sample.html" height="688px" width="500px"> </component-preview>

## Use This For
Telling users important and typically time sensitive information. This includes:

* Success messages
* Error messages
* Warnings
* Important pieces of information
* System statuses

## Don't Use This For
* In-line error validation on form inputs
* Popular content on your website
* Highlighting content, quotes, examples, snippets of information. Use a [callout component](https://developer.gov.bc.ca/Design-System/Callout) instead

## Design Guidance
* If a user is required to do something in response to an alert, let them know what they need to do and make that task as easy as possible. For example, provide them a link to something in the alert.
* Write messages in a concise manner while avoiding the use of jargon and technical language.
* Do not write lots of text. Too much text will cause users to ignore the content.
* Allow users the ability to dismiss alerts when appropriate.
* Avoid using more than one alert per page.
* Do not include alerts that are not related to the users current goal.

### Error Alert
Use error alerts with form validation errors or other errors, which will block the user from completing their task.

### Warning Alert
Use warning alerts to tell the user something urgent or to help the user avoid a problem.

### Information Alert
Use information alerts for important time-sensitive information.

### Success Alert
Use success alerts to notify the user that a task is fully completed

## Rationale
Alert banners use a combination of colour, icon and text to convey the purpose and meaning of the alert message. The text below the alert title provides guidance for the user with additional information or supporting actions.

## Accessibility
In addition to [fundamental accessibility](https://developer.gov.bc.ca/Design-System/Accessibility) requirements, this component meets or exceeds the [WCAG 2.0 AA](https://www.w3.org/TR/WCAG20/) standards by incorporating the following criteria.

### Screenreaders
As read using ChromeVox

> *"Error. The email address cannot be empty."*

> *"Warning. The eligibility requirements for this service have changed. Review the changes before continuing."*

> *"Information. The deadline for submission has been extended to March 1, 2020."*

> *"Success. Your application has been successfully submitted."*

### Colour Contrast
* [Contrast ratio](https://webaim.org/resources/contrastchecker/) exceeds 5:1 for text and links on all alert background colours.

### ARIA Labels
* `role="alert"` labels have been included to ensure screenreaders are conveying the contents of the alert banners effectively.

## Code
### HTML
```html
<div class="bc-gov-alertbanner bc-gov-alertbanner-error" role="alertdialog" aria-labelledby="error" aria-describedby="error-desc">
  <i class="fas fa-exclamation-circle"></i>
  <h3 id="error">Error</h3>
  <p id="error-desc">The email address cannot be empty.</p>
</div>

<div class="bc-gov-alertbanner bc-gov-alertbanner-warning" role="alertdialog" aria-labelledby="warning" aria-describedby="warning-desc">
  <i class="fas fa-exclamation-triangle"></i>
  <h3 id="warning">Warning</h3>
  <p id="warning-desc">The <a>eligibility requirements</a> for this service have changed. Review the changes before continuing.</p>
</div>

<div class="bc-gov-alertbanner bc-gov-alertbanner-important" role="alertdialog" aria-labelledby="important" aria-describedby="important-desc">
  <i class="fas fa-info-circle"></i>
  <h3 id="important">Information</h3>
  <p id="important-desc">The deadline for submission has been extended to March 1, 2020.</p>
</div>

<div class="bc-gov-alertbanner bc-gov-alertbanner-success" role="alertdialog" aria-labelledby="success" aria-describedby="success-desc">
  <i class="fas fa-check-circle"></i>
  <h3 id="success">Success</h3>
  <p id="success-desc">Your application has been successfully submitted.</p>
</div>
```

### CSS
```css
body {
  font-family: 'BC Sans', 'Noto Sans', Arial, 'sans serif';
  color: #313132;
  font-size: 16px;
  line-height: 1.5em;
}

a {
  color: #1a5a96;
  text-decoration: underline;
}

a:hover {
  color: blue;
  text-decoration: underline;
}

h1, h2, h3, h4, h5 {
  font-weight: 700;
  line-height: 1.2em;
  margin-bottom: 0.5em;
  margin-top: 0;
}

h1 {
  font-size: 2.074em;
}

h2 {
  font-size: 1.728em;
}

h3 {
  font-size: 1.44em;
}

h4 {
  font-size: 1.2em;
}

p {
  margin: 0;
}

.bc-gov-alertbanner {
  border: 1px solid transparent;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 20px;
  padding: 15px;
}

.bc-gov-alertbanner p, h3{
  padding-left: 30px;
}

.bc-gov-alertbanner-error {
  background-color: #f2dede;
  border-color: #ebccd1;
  color: #a12622;
}

.bc-gov-alertbanner-important {
  background-color: #d9eaf7;
}

.bc-gov-alertbanner-warning {
  background-color: #f9f1c6;
  border-color: #faebcc;
  color: #6c4a00;
}

.bc-gov-alertbanner-success {
  background-color: #dff0d8;
  border-color: #d6e9c6;
  color: #2d4821;
}

.fas {
  float: left;
}
```
