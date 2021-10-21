// VMR GPT ad script for Cruxnow.com
window.googletag = window.googletag || {cmd: []};

// Set VMR GPT configuration as global properties
// In future versions, this configuration object will be loaded externally
window.vmr = {

  // Enable ad slot refresh on a per-slot basis
  // Set 'true' or 'false' to enable/disable refresh on a slot
  REFRESH_VALUE_SLOT_1: 'true',
  REFRESH_VALUE_SLOT_2: 'true',
  REFRESH_VALUE_SLOT_3: 'true',
  REFRESH_VALUE_SLOT_4: 'true',
  REFRESH_VALUE_SLOT_5: 'true',
  REFRESH_VALUE_SLOT_6: 'true',
  REFRESH_VALUE_SLOT_7: 'true',
  REFRESH_VALUE_SLOT_8: 'true',

  // The percentage of the ad slot that should be in the viewport to be considered visible
  // Must be < 100
  MINIMUM_SLOT_VISIBLE_PERCENTAGE: 80,

  // Number of seconds an ad slot should be visible before it refreshes
  SECONDS_REFRESH_INTERVAL: 45,

  // Number of seconds until a user is considered inactive e.g. 90
  SECONDS_UNTIL_USER_INACTIVE: 90,

  // Fetch ad slots within X viewports
  FETCH_MARGIN_PERCENT: 100,

  // Render ad slots within X viewports
  RENDER_MARGIN_PERCENT: 100,

  // Multiply the above values on mobile where viewports are smaller
  MOBILE_SCALING: 2.0

};

const userActivityTimeout = vmr.SECONDS_UNTIL_USER_INACTIVE;
const refreshInterval = vmr.SECONDS_REFRESH_INTERVAL;
const minInViewPercentage = vmr.MINIMUM_SLOT_VISIBLE_PERCENTAGE;
const refreshTimers = [];

// Time when user was last active
let userLastActivity = Math.floor(Date.now() / 1000);

googletag.cmd.push(function() {

  // Define ad slots
  googletag.defineSlot('/4580722/CruxNow.com_New_300x250', [300,250], 'div-gpt-ad-3284456-1')
    .setTargeting('refresh', vmr.REFRESH_VALUE_SLOT_1)
    .setTargeting('adlocation', ['a'])
    .addService(googletag.pubads());
  googletag.defineSlot('/4580722/CruxNow.com_New_300x250', [300,250], 'div-gpt-ad-3284456-2')
    .setTargeting('refresh', vmr.REFRESH_VALUE_SLOT_2)
    .setTargeting('adlocation', ['b'])
    .addService(googletag.pubads());
  googletag.defineSlot('/4580722/CruxNow.com_New_300x250', [300,250], 'div-gpt-ad-3284456-3')
    .setTargeting('refresh', vmr.REFRESH_VALUE_SLOT_3)
    .setTargeting('adlocation', ['c'])
    .addService(googletag.pubads());
  googletag.defineSlot('/4580722/CruxNow.com_New_300x250', [300,250], 'div-gpt-ad-3284456-4')
    .setTargeting('refresh', vmr.REFRESH_VALUE_SLOT_4)
    .setTargeting('adlocation', ['d'])
    .addService(googletag.pubads());
  googletag.defineSlot('/4580722/CruxNow.com_New_300x250', [300,250], 'div-gpt-ad-3284456-5')
    .setTargeting('refresh', vmr.REFRESH_VALUE_SLOT_5)
    .setTargeting('adlocation', ['e'])
    .addService(googletag.pubads());
  googletag.defineSlot('/4580722/CruxNow.com_New_320x50', [320,50], 'div-gpt-ad-3284456-6')
    .setTargeting('refresh', vmr.REFRESH_VALUE_SLOT_6)
    .setTargeting('adlocation', ['a'])
    .addService(googletag.pubads());
  googletag.defineSlot('/4580722/CruxNow.com_New_320x50', [320,50], 'div-gpt-ad-3284456-7')
    .setTargeting('refresh', vmr.REFRESH_VALUE_SLOT_7)
    .setTargeting('adlocation', ['b'])
    .addService(googletag.pubads());
  googletag.defineSlot('/4580722/CruxNow.com_New_970x250', [970,250], 'div-gpt-ad-3284456-8')
    .setTargeting('refresh', vmr.REFRESH_VALUE_SLOT_8)
    .setTargeting('adlocation', ['a'])
    .addService(googletag.pubads());

  // Enable ad slot lazy loading
  googletag.pubads().enableLazyLoad({
    fetchMarginPercent: vmr.FETCH_MARGIN_PERCENT,
    renderMarginPercent: vmr.RENDER_MARGIN_PERCENT,
    mobileScaling: vmr.MOBILE_SCALING
  });
  
  // GPT ad slot visibility event listener
  // Also listens for user tab-outs
  googletag.pubads().addEventListener('slotVisibilityChanged', function(event) {

    let slot = event.slot;
    let advert = slot.getSlotElementId();
    let alreadyVisible = false;
    
    // Only track visibility and fire refreshes if refresh is enabled on the slot
    if (slot.getTargeting('refresh').indexOf('true') > -1) {

      // Slot visible area in viewport is at least the mimimum?
      if (slot && minInViewPercentage <= event.inViewPercentage) { // visible

        // Has the slot already been visible
        if (alreadyVisible == false) {

          // clear timers
          clearTimers();
          
          // set a new timer
          setTimer(slot);

          // set the visibility history
          alreadyVisible = true;

        }

      } else { // hidden

        // clear timers
        clearTimers();

      }
      
    }

  });

  // Initialize GPT
  googletag.enableServices();

  // display the slots
  googletag.display('div-gpt-ad-3284456-1');
  googletag.display('div-gpt-ad-3284456-2');
  googletag.display('div-gpt-ad-3284456-3');
  googletag.display('div-gpt-ad-3284456-4');
  googletag.display('div-gpt-ad-3284456-5');
  googletag.display('div-gpt-ad-3284456-6');
  googletag.display('div-gpt-ad-3284456-7');
  googletag.display('div-gpt-ad-3284456-8');

});

// Clear all existing refresh timers
function clearTimers() {
  for (let i=0; i < refreshTimers.length; i++) {
    clearInterval(refreshTimers[i]);
  }
}

// Set a new refresh timer
function setTimer(slot) {
  refreshTimers.push(setInterval(slotRefresh, refreshInterval * 1000, slot));
}

// The slot refresh function
function slotRefresh(a) {
  // only fire the actual refresh if user is active
  if (userIsActive()) {
    googletag.pubads().refresh([a]);
  }
}

// Check if the user is currently active (to limit ad refreshing)

// Function to update the time the user was last active
function userActivity() {
  userLastActivity = Math.floor(Date.now() / 1000);
}

// Function to to test whether the user is active
function userIsActive() {
  if (document.visibilityState == 'visible' && ((Math.floor(Date.now() / 1000) - userLastActivity) < userActivityTimeout)) {
    return true;
  } else {
    clearTimers();
    return false;
  }
}

// Add the most common user interaction event listeners
document.addEventListener('mousemove', userActivity, {passive: true});
document.addEventListener('mousedown', userActivity, {passive: true});
document.addEventListener('keypress', userActivity, {passive: true});
document.addEventListener('touchmove', userActivity, {passive: true});
document.addEventListener('gesture', userActivity, {passive: true});
document.addEventListener('deviceorientation', userActivity, {passive: true});
document.addEventListener('swipe', userActivity, {passive: true});