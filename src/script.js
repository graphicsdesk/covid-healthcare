import enterView from 'enter-view';
import textBalancer from 'text-balancer';
import { USE_COVER_HED, USE_EYE_NAV } from '../config.json';
import './scripts/page';

// Fade in navbar at scroll trigger

const navbar = document.getElementById('navbar');

if (USE_COVER_HED || USE_EYE_NAV) {
  enterView({
    selector: USE_COVER_HED ? '.headline' : '.step-deck',
    offset: USE_COVER_HED ? 1 : 0.957,
    enter: () => {
      navbar.classList.remove('only-logo');
    },
    exit: () => {
      navbar.classList.remove('show-nav-links');
      navbar.classList.add('only-logo');
    },
  });
}

// Mobile navbar hamburger trigger

export function hamburgerTrigger() {
  navbar.classList.toggle('show-nav-links');
}

// Text balance headline, deck, and image captions

// textBalancer.balanceText('.headline, .image-overlay .image-caption-text');

// Map container opacity stuff

const deckContainer = document.getElementById('deck-container');

enterView({
  selector: '.prescrolly-fade-in',
  enter: function() {
    deckContainer.classList.add('show-map');
  },
  exit: function() {
    deckContainer.classList.remove('show-map');
  },
  offset: 1,
});

enterView({
  selector: '.step-container:nth-child(4)',
  enter: function() {
    deckContainer.classList.add('show-dots');
  },
  exit: function() {
    deckContainer.classList.remove('show-dots');
  },
  offset: 1,
});

enterView({
  selector: '.step-container:nth-child(6)',
  enter: function() {
    deckContainer.classList.add('show-hospital-img');
  },
  exit: function() {
    deckContainer.classList.remove('show-hospital-img');
  },
  offset: 1,
});
