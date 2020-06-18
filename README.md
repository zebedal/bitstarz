# bitstarz

<h2>Objectives</h2>
<p>The challenge was to create a web page from a Figma Layout using no CSS frameworks and little Javascript as possible. For the scope of the challenge I haven't included vendor prefixes for IE, so Chrome or Firefox are advised for compatibility </p>

<h2>Constraints</h2>

<p>Was not provided any tablet or mobile layout, and no responsive approach was requested, so the page was created using the dimensions provided in Figma for the most part. Because of this, I haven't used some responsive design techniques I usually do as such: </p>
<ul>
  <li>No responsive typography</li>
  <li>Element dimensions using relative values</li>
  <li>Flexbox containers have no wrap activated </li>
  <li>Some section HTML elements have a fixed height according to the design, which can result in elements overlapping on window resize. I usually use height: auto</li>
  <li>Flexbox children have no flex-basis, width or flex defined, only justify content, and as such they will squeeze and can cause overflow on the document since no wrapping is defined</li>
  <li>As requested I haven't used almost no Javascript. The one I did use, was the "new" intersection observer API in order to detect if an element is in the viewport, and add a CSS class accordingly. Also added a bit of code just for the modal opening</li>
  <li>No media queries were used</li>
  </ul>
  
<h2>Animation techniques used</h2>
  <p>I used only CSS animations as required. For performance reasons, and to try to get smooth animations, I tried to change only properties that affect compositing on the browser - transform and opacity are examples of that.</p>
  <ul>
    <li>3d animations using perspective on parent containers. The cards on the hero section are a good example of that using rotateY</li>
    <li>hover effects using css pseudo classes for performance</li>
  </ul>
  
<h2>Final Considerations</h2>
  <p>I could have used animation on other elements, but I think It wouldn't add up to the project itself. I gave some examples of CSS techniques and I tried first and foremost, to complete the challenge requirements while producing organized and quality code</p>
  
