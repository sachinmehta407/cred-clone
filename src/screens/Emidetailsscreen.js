import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

// CRED CASH one-time settlement (50% waiver on overdue charges)
const PRINCIPAL_LEFT = 10243;
const OVERDUE_CHARGES = 19879.75;
const WAIVER_PERCENT = 50;
const WAIVER_AMOUNT = Number((OVERDUE_CHARGES * (WAIVER_PERCENT / 100)).toFixed(2)); // ₹9,939.88
const REMAINING_CHARGES = WAIVER_AMOUNT; // exact 50% split → ₹9,939.88
const SETTLEMENT_TOTAL = Number((PRINCIPAL_LEFT + REMAINING_CHARGES).toFixed(2)); // ₹20,182.88
const OVERDUE_EMI_COUNT = 2;
const EMI_PLAN_COUNT = 3;
const EMI_INSTALLMENT = Number((SETTLEMENT_TOTAL / EMI_PLAN_COUNT).toFixed(2)); // ₹6,727.63
const OFFER_DEADLINE = "02 Nov 2026";
const formatAmount = (value) =>
  value.toLocaleString('en-IN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
const EMI_PAY_AMOUNT = formatAmount(SETTLEMENT_TOTAL);

const EMIDetailsScreen = ({ navigation }) => {
  const [paymentPlan, setPaymentPlan] = useState('full'); // 'full' | 'emi3'
  const selectedPayAmount =
    paymentPlan === 'emi3'
      ? formatAmount(EMI_INSTALLMENT)
      : EMI_PAY_AMOUNT;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation?.goBack()}
        >
          <Ionicons name="arrow-back" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Needs Attention Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>NEEDS ATTENTION</Text>

          <View style={styles.needsCard}>
            <View style={styles.needsCardTop}>
              <View style={styles.needsCardHeader}>
                <View style={styles.needsCardHeaderText}>
                  <Text style={styles.emiTitle}>
                    EMI{' '}
                    <Text style={styles.dueTitleOrange}>Overdue 2 EMI(s)</Text>
                  </Text>
                  <Text style={styles.emiSubtitle}>
                    autopay will pay your EMI on the due date
                  </Text>
                </View>
                <View style={styles.iconContainer}>
                  <MaterialCommunityIcons
                    name="calendar-clock"
                    size={22}
                    color="#ff9500"
                  />
                </View>
              </View>
            </View>

            <View style={styles.needsCardBottom}>
              <View style={styles.offerBadge}>
                <Ionicons name="gift-outline" size={11} color="#fff" />
                <Text style={styles.offerBadgeText}>
                  ONE-TIME SETTLEMENT · {WAIVER_PERCENT}% WAIVER
                </Text>
              </View>
              <Text style={styles.amountLabel}>final settlement amount</Text>
              <Text style={styles.amount}>₹{EMI_PAY_AMOUNT}</Text>

              <View style={styles.breakdownBox}>
                <Text style={styles.breakdownTitle}>SETTLEMENT BREAKDOWN</Text>
                <Text style={styles.breakdownHint}>
                  {OVERDUE_EMI_COUNT} EMI(s) overdue · EMI 22 of 24
                </Text>

                <View style={styles.breakdownRow}>
                  <View style={styles.breakdownLabelRow}>
                    <MaterialCommunityIcons
                      name="cash-plus"
                      size={13}
                      color="#2e7d32"
                    />
                    <View style={styles.breakdownLabelWrap}>
                      <Text style={styles.breakdownLabel}>
                        Principal outstanding
                      </Text>
                      <Text style={styles.breakdownSub}>
                        actual outstanding loan principal
                      </Text>
                    </View>
                  </View>
                  <Text style={styles.breakdownValueGreen}>
                    ₹{formatAmount(PRINCIPAL_LEFT)}
                  </Text>
                </View>

                <View style={styles.breakdownPlus}>
                  <Text style={styles.breakdownPlusText}>+</Text>
                </View>

                <View style={styles.breakdownRow}>
                  <View style={styles.breakdownLabelRow}>
                    <Ionicons name="alert-circle" size={13} color="#ff9500" />
                    <View style={styles.breakdownLabelWrap}>
                      <Text style={styles.breakdownLabel}>Overdue charges</Text>
                      <Text style={styles.breakdownSub}>
                        late fees on {OVERDUE_EMI_COUNT} unpaid EMI(s)
                      </Text>
                    </View>
                  </View>
                  <Text style={styles.breakdownValueOrange}>
                    ₹{formatAmount(OVERDUE_CHARGES)}
                  </Text>
                </View>

                <View style={styles.breakdownPlus}>
                  <Text style={styles.breakdownPlusText}>−</Text>
                </View>

                <View style={styles.breakdownRow}>
                  <View style={styles.breakdownLabelRow}>
                    <Ionicons name="pricetag" size={13} color="#2e7d32" />
                    <View style={styles.breakdownLabelWrap}>
                      <Text style={styles.breakdownLabel}>
                        {WAIVER_PERCENT}% waiver on overdue charges
                      </Text>
                      <Text style={styles.breakdownSub}>
                        special one-time settlement offer
                      </Text>
                    </View>
                  </View>
                  <Text style={styles.breakdownValueGreen}>
                    −₹{formatAmount(WAIVER_AMOUNT)}
                  </Text>
                </View>

                <View style={styles.breakdownPlus}>
                  <Text style={styles.breakdownPlusText}>=</Text>
                </View>

                <View style={styles.breakdownRow}>
                  <View style={styles.breakdownLabelRow}>
                    <Ionicons name="receipt-outline" size={13} color="#ff9500" />
                    <View style={styles.breakdownLabelWrap}>
                      <Text style={styles.breakdownLabel}>
                        Remaining overdue charges
                      </Text>
                      <Text style={styles.breakdownSub}>
                        after {WAIVER_PERCENT}% waiver
                      </Text>
                    </View>
                  </View>
                  <Text style={styles.breakdownValueOrange}>
                    ₹{formatAmount(REMAINING_CHARGES)}
                  </Text>
                </View>

                <View style={styles.breakdownDivider} />

                <View style={styles.breakdownRow}>
                  <View style={styles.breakdownLabelRow}>
                    <Ionicons name="card-outline" size={13} color="#c62828" />
                    <View style={styles.breakdownLabelWrap}>
                      <Text style={styles.breakdownLabelTotal}>
                        Total final settlement
                      </Text>
                      <Text style={styles.breakdownSub}>
                        principal + remaining charges
                      </Text>
                    </View>
                  </View>
                  <View style={styles.breakdownTotalBadge}>
                    <Text style={styles.breakdownTotalValue}>
                      ₹{EMI_PAY_AMOUNT}
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.finalOfferBox}>
                <Ionicons name="warning" size={14} color="#c62828" />
                <Text style={styles.finalOfferText}>
                  Final offer. Pay before{' '}
                  <Text style={styles.finalOfferDate}>{OFFER_DEADLINE}</Text> to
                  avoid a lined up account.
                </Text>
              </View>

              <View style={styles.warningRow}>
                <Ionicons name="alert-circle" size={12} color="#ff6b35" />
                <Text style={styles.dueTitleOrange}>
                  clear ₹{EMI_PAY_AMOUNT} via CRED app to close your account
                </Text>
              </View>
              <View style={styles.accountRow}>
                <Ionicons name="person-outline" size={12} color="#666" />
                <Text style={styles.accountDetails}>
                  Sandeep singh 103680 • EMI 22 of 24
                </Text>
              </View>

              <Text style={styles.planTitle}>CHOOSE PAYMENT OPTION</Text>
              <TouchableOpacity
                style={[
                  styles.planOption,
                  paymentPlan === 'full' && styles.planOptionSelected,
                ]}
                onPress={() => setPaymentPlan('full')}
                activeOpacity={0.8}
              >
                <View style={styles.planOptionLeft}>
                  <Ionicons
                    name={
                      paymentPlan === 'full'
                        ? 'radio-button-on'
                        : 'radio-button-off'
                    }
                    size={16}
                    color={paymentPlan === 'full' ? '#2e7d32' : '#999'}
                  />
                  <View style={styles.planOptionTextWrap}>
                    <Text style={styles.planOptionTitle}>Pay in full</Text>
                    <Text style={styles.planOptionSub}>
                      clear full settlement now
                    </Text>
                  </View>
                </View>
                <Text style={styles.planOptionAmount}>₹{EMI_PAY_AMOUNT}</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.planOption,
                  paymentPlan === 'emi3' && styles.planOptionSelected,
                ]}
                onPress={() => setPaymentPlan('emi3')}
                activeOpacity={0.8}
              >
                <View style={styles.planOptionLeft}>
                  <Ionicons
                    name={
                      paymentPlan === 'emi3'
                        ? 'radio-button-on'
                        : 'radio-button-off'
                    }
                    size={16}
                    color={paymentPlan === 'emi3' ? '#2e7d32' : '#999'}
                  />
                  <View style={styles.planOptionTextWrap}>
                    <Text style={styles.planOptionTitle}>
                      Pay in {EMI_PLAN_COUNT} EMIs
                    </Text>
                    <Text style={styles.planOptionSub}>
                      ₹{formatAmount(7058.95)} × {EMI_PLAN_COUNT}{' '}
                      installments
                    </Text>
                  </View>
                </View>
                <Text style={styles.planOptionAmount}>
                  ₹{formatAmount(7058.95)}
                </Text>
              </TouchableOpacity>

              <View style={styles.buttonRow}>
                <TouchableOpacity
                  style={styles.payNowButton}
                  onPress={() =>
                    navigation?.navigate('LoanDetails', {
                      openPayModal: true,
                      payAmount: selectedPayAmount,
                    })
                  }
                  activeOpacity={0.8}
                >
                  <Ionicons name="flash" size={13} color="#1a1a1a" />
                  <Text style={styles.payNowText}>
                    {paymentPlan === 'emi3'
                      ? `Pay ₹${formatAmount(7058.95)}`
                      : 'Pay now'}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.viewDetailsButton}
                  onPress={() => navigation?.navigate('LoanDetails')}
                  activeOpacity={0.8}
                >
                  <Ionicons
                    name="document-text-outline"
                    size={13}
                    color="#fff"
                  />
                  <Text style={styles.viewDetailsText}>View details</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        {/* Your Active Draws Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>YOUR ACTIVE DRAWS</Text>

          <View style={styles.activeDrawCard}>
            <View style={styles.progressContainer}>
              <View style={styles.progressRingOuter} />
              <View style={styles.progressCenter}>
                <MaterialCommunityIcons
                  name="shield-check"
                  size={22}
                  color="#00ff88"
                />
                <Text style={styles.progressPercentage}>83%</Text>
                <Text style={styles.progressLabel}>paid</Text>
              </View>
            </View>

            <View style={styles.drawInfo}>
              <View style={styles.onTrackRow}>
                <Ionicons name="checkmark-circle" size={12} color="#00ff88" />
                <Text style={styles.onTrackLabel}>ON TRACK</Text>
              </View>
              <Text style={styles.drawName}>Sandeep singh 103680</Text>
              <View style={styles.monthsLeftRow}>
                <Ionicons name="time-outline" size={12} color="#666" />
                <Text style={styles.drawSubtitle}>2 months EMI left</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Exclusive Benefits Section */}
        <View style={styles.benefitsSection}>
          <MaterialCommunityIcons
            name="gift-outline"
            size={24}
            color="#fff"
            style={styles.benefitsIcon}
          />
          <Text style={styles.benefitsTitle}>
            exclusive benefits{'\n'}
            for your CRED cash
          </Text>
          <View style={styles.benefitsIndicator} />
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  header: {
    paddingTop: 42,
    paddingHorizontal: 14,
    paddingBottom: 8,
  },
  backButton: {
    width: 32,
    height: 32,
    justifyContent: 'center',
  },
  section: {
    paddingHorizontal: 14,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 10,
    fontWeight: '600',
    color: '#666',
    letterSpacing: 1.2,
    marginBottom: 8,
  },
  needsCard: {
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  needsCardTop: {
    backgroundColor: '#c9b5a0',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  needsCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 8,
  },
  needsCardHeaderText: {
    flex: 1,
    minWidth: 0,
  },
  emiTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 3,
  },
  dueTitleOrange: {
    flex: 1,
    fontSize: 11,
    color: '#ff6b35',
  },
  warningRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 5,
    marginBottom: 6,
  },
  emiSubtitle: {
    fontSize: 11,
    color: '#4a4a4a',
    lineHeight: 15,
  },
  iconContainer: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: 'rgba(255, 149, 0, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  needsCardBottom: {
    backgroundColor: '#e8e8e8',
    padding: 12,
  },
  offerBadge: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#2e7d32',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
    marginBottom: 6,
  },
  offerBadgeText: {
    fontSize: 9,
    fontWeight: '700',
    color: '#fff',
    letterSpacing: 0.3,
  },
  amountLabel: {
    fontSize: 10,
    fontWeight: '600',
    color: '#888',
    letterSpacing: 0.6,
    marginBottom: 2,
  },
  amount: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  finalOfferBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 6,
    backgroundColor: '#ffebee',
    borderWidth: 1,
    borderColor: '#ef9a9a',
    borderRadius: 6,
    padding: 8,
    marginBottom: 8,
  },
  finalOfferText: {
    flex: 1,
    fontSize: 11,
    color: '#b71c1c',
    lineHeight: 15,
    fontWeight: '500',
  },
  finalOfferDate: {
    fontWeight: '800',
    textDecorationLine: 'underline',
  },
  breakdownBox: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  breakdownTitle: {
    fontSize: 9,
    fontWeight: '700',
    color: '#666',
    letterSpacing: 0.8,
    marginBottom: 2,
  },
  breakdownHint: {
    fontSize: 10,
    color: '#888',
    marginBottom: 8,
  },
  breakdownRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 6,
  },
  breakdownLabelRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 6,
    flex: 1,
    paddingRight: 4,
    minWidth: 0,
  },
  breakdownLabelWrap: {
    flex: 1,
    minWidth: 0,
  },
  breakdownLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  breakdownLabelTotal: {
    fontSize: 12,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  breakdownSub: {
    fontSize: 9,
    color: '#888',
    marginTop: 1,
  },
  breakdownValueGreen: {
    fontSize: 12,
    fontWeight: '700',
    color: '#2e7d32',
    flexShrink: 0,
  },
  breakdownValueOrange: {
    fontSize: 12,
    fontWeight: '700',
    color: '#ff9500',
    flexShrink: 0,
  },
  breakdownPlus: {
    alignItems: 'center',
    paddingVertical: 1,
  },
  breakdownPlusText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#999',
  },
  breakdownDivider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#e0e0e0',
    marginVertical: 6,
  },
  breakdownTotalBadge: {
    backgroundColor: '#c62828',
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 5,
  },
  breakdownTotalValue: {
    fontSize: 12,
    fontWeight: '700',
    color: '#fff',
  },
  accountRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 10,
  },
  accountDetails: {
    fontSize: 11,
    color: '#666',
  },
  planTitle: {
    fontSize: 9,
    fontWeight: '700',
    color: '#666',
    letterSpacing: 0.8,
    marginBottom: 6,
  },
  planOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 8,
    marginBottom: 6,
    backgroundColor: '#fff',
    gap: 6,
  },
  planOptionSelected: {
    borderColor: '#2e7d32',
    backgroundColor: '#f0fdf4',
  },
  planOptionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    flex: 1,
    minWidth: 0,
  },
  planOptionTextWrap: {
    flex: 1,
    minWidth: 0,
  },
  planOptionTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  planOptionSub: {
    fontSize: 10,
    color: '#666',
    marginTop: 1,
  },
  planOptionAmount: {
    fontSize: 12,
    fontWeight: '700',
    color: '#1a1a1a',
    flexShrink: 0,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 2,
  },
  payNowButton: {
    flex: 1,
    backgroundColor: 'transparent',
    borderWidth: 1.2,
    borderColor: '#1a1a1a',
    paddingVertical: 10,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 4,
  },
  payNowText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  viewDetailsButton: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    paddingVertical: 10,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 4,
  },
  viewDetailsText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#fff',
  },
  activeDrawCard: {
    backgroundColor: '#252525',
    borderRadius: 12,
    padding: 14,
    alignItems: 'center',
  },
  progressContainer: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  progressRingOuter: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 6,
    borderColor: '#2a2a2a',
  },
  progressCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressPercentage: {
    fontSize: 22,
    fontWeight: '700',
    color: '#fff',
    marginTop: 4,
  },
  progressLabel: {
    fontSize: 11,
    color: '#999',
    marginTop: 1,
  },
  drawInfo: {
    alignItems: 'center',
    width: '100%',
  },
  onTrackRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    marginBottom: 4,
  },
  onTrackLabel: {
    fontSize: 9,
    fontWeight: '700',
    color: '#00ff88',
    letterSpacing: 1,
  },
  drawName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 2,
  },
  monthsLeftRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  drawSubtitle: {
    fontSize: 11,
    color: '#666',
  },
  benefitsIcon: {
    marginBottom: 6,
  },
  benefitsSection: {
    paddingHorizontal: 14,
    paddingVertical: 18,
    alignItems: 'center',
  },
  benefitsTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 8,
  },
  benefitsIndicator: {
    width: 48,
    height: 3,
    backgroundColor: '#fff',
    borderRadius: 2,
  },
});

export default EMIDetailsScreen;