import { StyleSheet } from 'react-native';

export const COLORS = {
  primary: '#10B981',
  backgroundDark: '#101622',
  backgroundCard: 'rgba(13, 89, 242, 0.05)',
  textPrimary: '#ffffff',
  textSecondary: '#9ca3af',
  textMuted: '#6b7280',
  borderLight: 'rgba(13, 89, 242, 0.2)',
  error: '#ef4444',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundDark,
  },

  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 32,
    marginTop: 40,
    paddingBottom: 24,
  },

  header: {
    alignItems: 'center',
    marginBottom: 40,
  },

  logoContainer: {
    width: 60,
    height: 60,
    backgroundColor: '#10B981',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },

  logoImg: {
    width: 56,
    height: 56,
    borderRadius: 10,
    resizeMode: 'cover',
  },

  welcome: {
    fontSize: 28,
    fontWeight: '700',
    color: COLORS.textPrimary,
    marginBottom: 8,
    textAlign: 'center',
  },

  info: {
    fontSize: 15,
    color: COLORS.textSecondary,
    textAlign: 'center',
  },

  // Form styles
  form: {
    marginBottom: 32,
  },

  fieldGroup: {
    marginBottom: 20,
  },

  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    paddingHorizontal: 4,
  },

  label: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.textSecondary,
  },

  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.backgroundCard,
    borderWidth: 1,
    borderColor: COLORS.borderLight,
    borderRadius: 12,
    paddingHorizontal: 16,
    minHeight: 52,
  },

  inputWrapperFocused: {
    borderColor: COLORS.primary,
    borderWidth: 1.5,
  },

  inputWrapperError: {
    borderColor: COLORS.error,
  },

  icon: {
    marginRight: 12,
  },

  textInput: {
    flex: 1,
    fontSize: 16,
    color: COLORS.textPrimary,
    paddingVertical: 14,
  },

  eyeButton: {
    padding: 8,
    marginLeft: 4,
  },

  forgotLink: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.primary,
  },

  errorText: {
    fontSize: 12,
    color: COLORS.error,
    marginTop: 6,
    marginLeft: 4,
  },

  submit: {
    backgroundColor: COLORS.primary,
    paddingVertical: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 8,
  },

  submitDisabled: {
    opacity: 0.6,
  },

  submitText: {
    fontSize: 17,
    fontWeight: '700',
    color: COLORS.textPrimary,
    marginRight: 8,
  },

  // Divider
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 32,
  },

  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.borderLight,
  },

  dividerText: {
    fontSize: 11,
    fontWeight: '600',
    color: COLORS.textMuted,
    marginHorizontal: 16,
    letterSpacing: 2,
  },

  // OAuth
  oAuth: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 32,
  },

  oAuthButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.borderLight,
    backgroundColor: 'transparent',
  },

  oAuthIcon: {
    marginRight: 10,
  },

  oAuthText: {
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.textSecondary,
  },

  // Footer
  footer: {
    marginTop: 'auto',
    alignItems: 'center',
    paddingVertical: 24,
  },

  footerText: {
    fontSize: 14,
    color: COLORS.textSecondary,
  },

  signUpLink: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.primary,
    marginLeft: 4,
  },

  signUpRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  // Signup-specific
  backButton: {
    position: 'absolute',
    top: 22,
    left: 24,
    zIndex: 10,
    padding: 8,
  },

  passwordHint: {
    fontSize: 11,
    color: COLORS.textMuted,
    marginTop: 6,
    marginLeft: 4,
  },

  termsRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
  },

  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: COLORS.borderLight,
    marginRight: 12,
    marginTop: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  checkboxChecked: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },

  termsText: {
    flex: 1,
    fontSize: 13,
    color: COLORS.textSecondary,
  },

  termsLink: {
    color: COLORS.primary,
    fontWeight: '600',
  },
});

export default styles;
