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
  Keyboard,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';

import { login } from '../features/authSlice';
import styles, { COLORS } from '../navigation/styles';

const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

export default function LoginPage({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const users = useSelector((state: any) => state.auth.users);

  const emailError = submitted && (!email.trim() || !isValidEmail(email));

  const passwordError = submitted && (!password || password.length < 4);

  const isValid = email.trim() && isValidEmail(email) && password.length >= 4;
  const dispatch = useDispatch();

  const handleLogin = async () => {
    Keyboard.dismiss();
    setSubmitted(true);
    if (!isValid) return;
    const existingUser = users.find((user: any) => {
      return user.email === email && user.password === password;
    });

    if (!existingUser) {
      alert('Invalid Credentials');
      return;
    }

    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 1200));

    dispatch(login(existingUser));
    setIsLoading(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
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
            <Text style={styles.welcome}>Welcome Back</Text>
            <Text style={styles.info}>
              Sign in to access your premium account
            </Text>
          </View>

          <View style={styles.form}>
            {/* Email */}
            <View style={styles.fieldGroup}>
              <Text style={{ ...styles.label, marginBottom: 8 }}>
                Email Address
              </Text>
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
                  autoCorrect={false}
                  editable={!isLoading}
                />
              </View>
              {emailError && (
                <Text style={styles.errorText}>Please enter a valid email</Text>
              )}
            </View>

            {/* Password */}
            <View style={styles.fieldGroup}>
              <View style={styles.labelRow}>
                <Text style={styles.label}>Password</Text>
                <TouchableOpacity activeOpacity={0.7}>
                  <Text style={styles.forgotLink}>Forgot Password?</Text>
                </TouchableOpacity>
              </View>
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
                  onChangeText={(text) => setPassword(text)}
                  secureTextEntry={!showPassword}
                  autoCorrect={false}
                  autoCapitalize="none"
                  autoComplete="off"
                  importantForAutofill="no"
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
                  Password must be at least 4 characters
                </Text>
              )}
            </View>

            <TouchableOpacity
              style={[styles.submit, !isValid && styles.submitDisabled]}
              onPress={handleLogin}
              disabled={!isValid || isLoading}
            >
              {isLoading ? (
                <ActivityIndicator color="#fff" size="small" />
              ) : (
                <>
                  <Text style={styles.submitText}>Sign In</Text>
                  <Ionicons
                    name="arrow-forward"
                    size={20}
                    color={COLORS.textPrimary}
                  />
                </>
              )}
            </TouchableOpacity>
          </View>

          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>Or continue with</Text>
            <View style={styles.dividerLine} />
          </View>

          <View style={styles.oAuth}>
            <TouchableOpacity style={styles.oAuthButton} disabled={isLoading}>
              <Ionicons
                name="logo-google"
                size={20}
                color={COLORS.textSecondary}
                style={styles.oAuthIcon}
              />
              <Text style={styles.oAuthText}>Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.oAuthButton} disabled={isLoading}>
              <Ionicons
                name="logo-apple"
                size={22}
                color={COLORS.textSecondary}
                style={styles.oAuthIcon}
              />
              <Text style={styles.oAuthText}>Apple</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <TouchableOpacity
          style={styles.footer}
          onPress={() => navigation?.navigate('Signup')}
          disabled={isLoading}
        >
          <View style={styles.signUpRow}>
            <Text style={styles.footerText}>Don't have an account? </Text>
            <Text style={styles.signUpLink}>Sign Up</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
