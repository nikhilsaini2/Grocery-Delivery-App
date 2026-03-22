import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';

import { signup, login } from '../features/authSlice';
import styles, { COLORS } from '../navigation/styles';

const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

const isStrongPassword = (password: string) =>
  password.length >= 8 &&
  /[A-Z]/.test(password) &&
  /[a-z]/.test(password) &&
  /[0-9]/.test(password);

export default function SignupPage({ navigation }: any) {
  const dispatch = useDispatch();
  const users = useSelector((state: any) => state.auth.users);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const fullNameError = submitted && !fullName.trim();
  const emailError = submitted && !isValidEmail(email);
  const passwordError = submitted && !isStrongPassword(password);
  const confirmError = submitted && password !== confirmPassword;
  const termsError = submitted && !agreeTerms;

  const isValid =
    fullName.trim() &&
    isValidEmail(email) &&
    isStrongPassword(password) &&
    password === confirmPassword &&
    agreeTerms;

  const handleSignup = async () => {
    setSubmitted(true);
    if (!isValid) return;

    const existingUser = users.find((user: any) => {
      return user.email === email;
    });

    if (existingUser) {
      alert('Email already exists');
      return;
    }

    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    const userData = {
      name: fullName,
      email,
      password,
    };
    dispatch(signup(userData));
    dispatch(login(userData));
    setIsLoading(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation?.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color={COLORS.textSecondary} />
        </TouchableOpacity>

        <ScrollView
          bounces={false}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.header}>
            <View style={styles.logoContainer}>
              <Image
                source={require('../../assets/logo.png')}
                style={styles.logoImg}
              />
            </View>
            <Text style={styles.welcome}>Create Account</Text>
            <Text style={styles.info}>
              Sign up to get started with your premium experience
            </Text>
          </View>

          <View style={styles.form}>
            {/* Full Name */}
            <View style={styles.fieldGroup}>
              <Text style={styles.label}>Full Name</Text>
              <View
                style={[
                  styles.inputWrapper,
                  fullNameError && styles.inputWrapperError,
                ]}
              >
                <Ionicons
                  name="person-outline"
                  size={20}
                  color={COLORS.textMuted}
                  style={styles.icon}
                />
                <TextInput
                  style={styles.textInput}
                  placeholder="Enter name"
                  placeholderTextColor={COLORS.textMuted}
                  value={fullName}
                  onChangeText={setFullName}
                  editable={!isLoading}
                />
              </View>
              {fullNameError && (
                <Text style={styles.errorText}>Full name is required</Text>
              )}
            </View>

            {/* Email */}
            <View style={styles.fieldGroup}>
              <Text style={styles.label}>Email Address</Text>
              <View
                style={[
                  styles.inputWrapper,
                  emailError && styles.inputWrapperError,
                ]}
              >
                <Ionicons
                  name="mail-outline"
                  size={20}
                  color={COLORS.textMuted}
                  style={styles.icon}
                />
                <TextInput
                  style={styles.textInput}
                  placeholder="name@company.com"
                  placeholderTextColor={COLORS.textMuted}
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  editable={!isLoading}
                />
              </View>
              {emailError && (
                <Text style={styles.errorText}>Please enter a valid email</Text>
              )}
            </View>

            {/* Password */}
            <View style={styles.fieldGroup}>
              <Text style={styles.label}>Password</Text>
              <View
                style={[
                  styles.inputWrapper,
                  passwordError && styles.inputWrapperError,
                ]}
              >
                <Ionicons
                  name="lock-closed-outline"
                  size={20}
                  color={COLORS.textMuted}
                  style={styles.icon}
                />
                <TextInput
                  style={styles.textInput}
                  placeholder="••••••••"
                  placeholderTextColor={COLORS.textMuted}
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                  editable={!isLoading}
                />
                <TouchableOpacity
                  style={styles.eyeButton}
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <Ionicons
                    name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                    size={22}
                    color={COLORS.textMuted}
                  />
                </TouchableOpacity>
              </View>
              {passwordError && (
                <Text style={styles.errorText}>
                  Use 8+ chars, 1 uppercase, 1 lowercase, 1 number
                </Text>
              )}
            </View>

            {/* Confirm Password */}
            <View style={styles.fieldGroup}>
              <Text style={styles.label}>Confirm Password</Text>
              <View
                style={[
                  styles.inputWrapper,
                  confirmError && styles.inputWrapperError,
                ]}
              >
                <Ionicons
                  name="lock-closed-outline"
                  size={20}
                  color={COLORS.textMuted}
                  style={styles.icon}
                />
                <TextInput
                  style={styles.textInput}
                  placeholder="••••••••"
                  placeholderTextColor={COLORS.textMuted}
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  secureTextEntry={!showConfirmPassword}
                  editable={!isLoading}
                />
                <TouchableOpacity
                  style={styles.eyeButton}
                  onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  <Ionicons
                    name={
                      showConfirmPassword ? 'eye-outline' : 'eye-off-outline'
                    }
                    size={22}
                    color={COLORS.textMuted}
                  />
                </TouchableOpacity>
              </View>
              {confirmError && (
                <Text style={styles.errorText}>Passwords do not match</Text>
              )}
            </View>

            {/* Terms */}
            <TouchableOpacity
              style={styles.termsRow}
              onPress={() => setAgreeTerms(!agreeTerms)}
              disabled={isLoading}
            >
              <View
                style={[styles.checkbox, agreeTerms && styles.checkboxChecked]}
              >
                {agreeTerms && (
                  <Ionicons name="checkmark" size={14} color="#fff" />
                )}
              </View>
              <Text style={styles.termsText}>
                I agree to the{' '}
                <Text style={styles.termsLink}>Terms of Service</Text> and{' '}
                <Text style={styles.termsLink}>Privacy Policy</Text>
              </Text>
            </TouchableOpacity>
            {termsError && (
              <Text style={styles.errorText}>You must agree to the terms</Text>
            )}

            <TouchableOpacity
              style={[styles.submit, !isValid && styles.submitDisabled]}
              onPress={handleSignup}
              disabled={!isValid || isLoading}
            >
              {isLoading ? (
                <ActivityIndicator color="#fff" size="small" />
              ) : (
                <>
                  <Text style={styles.submitText}>Create Account</Text>
                  <Ionicons
                    name="arrow-forward"
                    size={20}
                    color={COLORS.textPrimary}
                  />
                </>
              )}
            </TouchableOpacity>
          </View>
        </ScrollView>

        <TouchableOpacity
          style={styles.footer}
          onPress={() => navigation?.goBack()}
          disabled={isLoading}
        >
          <View style={styles.signUpRow}>
            <Text style={styles.footerText}>Already have an account? </Text>
            <Text style={styles.signUpLink}>Sign In</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
