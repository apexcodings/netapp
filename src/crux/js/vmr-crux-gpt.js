// Ad slots will be lazy-loaded with the config below
// Ad slots will be refreshed if viewable

// CONFIGURATION BELOW-TEST-123-456

// Number of seconds a slot should be viewable before it refreshes
const SECONDS_TO_WAIT_AFTER_VIEWABILITY = 300;

// Fetch slots within 5 viewports
const FETCH_MARGIN_PERCENT = 500;

// Render slots within 1 viewport
const RENDER_MARGIN_PERCENT = 100;

// Double the above values on mobile, where viewports are smaller
// and users tend to scroll faster
const MOBILE_SCALING = 2.0;

window.googletag = window.googletag || {cmd: []};

googletag.cmd.push(function() {

  // Define ad slots
  googletag.defineSlot('/4580722/CruxNow.com_New_300x250', [300,250], 'div-gpt-ad-3284456-1')
    .setTargeting('refresh', 'true')
    .setTargeting('adlocation', ['a'])
    .addService(googletag.pubads());
  googletag.defineSlot('/4580722/CruxNow.com_New_300x250', [300,250], 'div-gpt-ad-3284456-2')
    .setTargeting('refresh', 'true')
    .setTargeting('adlocation', ['b'])
    .addService(googletag.pubads());
  googletag.defineSlot('/4580722/CruxNow.com_New_300x250', [300,250], 'div-gpt-ad-3284456-3')
    .setTargeting('refresh', 'true')
    .setTargeting('adlocation', ['c'])
    .addService(googletag.pubads());
  googletag.defineSlot('/4580722/CruxNow.com_New_300x250', [300,250], 'div-gpt-ad-3284456-4')
    .setTargeting('refresh', 'true')
    .setTargeting('adlocation', ['d'])
    .addService(googletag.pubads());
  googletag.defineSlot('/4580722/CruxNow.com_New_300x250', [300,250], 'div-gpt-ad-3284456-5')
    .setTargeting('refresh', 'true')
    .setTargeting('adlocation', ['e'])
    .addService(googletag.pubads());
  googletag.defineSlot('/4580722/CruxNow.com_New_320x50', [320,50], 'div-gpt-ad-3284456-6')
    .setTargeting('refresh', 'true')
    .setTargeting('adlocation', ['a'])
    .addService(googletag.pubads());
  googletag.defineSlot('/4580722/CruxNow.com_New_320x50', [320,50], 'div-gpt-ad-3284456-7')
    .setTargeting('refresh', 'true')
    .setTargeting('adlocation', ['b'])
    .addService(googletag.pubads());
  googletag.defineSlot('/4580722/CruxNow.com_New_970x250', [970,250], 'div-gpt-ad-3284456-8')
    .setTargeting('refresh', 'true')
    .setTargeting('adlocation', ['a'])
    .addService(googletag.pubads());

  // Enable ad slot lazy loading
  googletag.pubads().enableLazyLoad({
    fetchMarginPercent: FETCH_MARGIN_PERCENT,
    renderMarginPercent: RENDER_MARGIN_PERCENT,
    mobileScaling: MOBILE_SCALING
  });

  // Set the slot to refresh if viewable
  googletag.pubads().addEventListener('impressionViewable', function(event) {

    let slot = event.slot;
          
    // Refresh the slot if it is configured as .setTargeting('refresh', 'true')
    if (slot.getTargeting('refresh').indexOf('true') > -1) {
            
      function slotRefresh() {
        googletag.pubads().refresh([slot]);
      }

      clearTimeout(slotRefresh);

      setTimeout(slotRefresh, SECONDS_TO_WAIT_AFTER_VIEWABILITY * 1000);

    }

  });
  
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

