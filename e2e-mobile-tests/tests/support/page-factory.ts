import OnboardingPage from '../pageobjects/OnboardingPage';
import SignUpPage from '../pageobjects/SignUpPage';

class PageFactory {
  static get onboarding() {
    return new OnboardingPage();
  }

  static get signUp() {
    return new SignUpPage();
  }
}

export const Pages = PageFactory;