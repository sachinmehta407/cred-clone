import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

// const Total = ₹1,38,976.94 + ₹12,990.00 + ₹56,947.45 = ₹2,08,914.39

const TIMELINE_DATA = [
  {
    month: 51,
    date: "2nd Apr 2029",
    type: "complete",
    label: "Loan repayment complete",
  },

  {
    installmentNumber: 32,
    date: "2nd Mar 2029",
    month: 50,
    type: "pending",
    emi: "₹5,864.39",
    charges: "₹0.00",
    amount: "₹5,864.39",
    balanceAfterPayment: "₹0.00",
  },

  {
    installmentNumber: 31,
    date: "2nd Feb 2029",
    month: 49,
    type: "pending",
    emi: "₹6,550.00",
    charges: "₹0.00",
    amount: "₹6,550.00",
    balanceAfterPayment: "₹5,864.39",
  },

  {
    installmentNumber: 30,
    date: "2nd Jan 2029",
    month: 48,
    type: "pending",
    emi: "₹6,550.00",
    charges: "₹0.00",
    amount: "₹6,550.00",
    balanceAfterPayment: "₹12,414.39",
  },

  {
    installmentNumber: 29,
    date: "2nd Dec 2028",
    month: 47,
    type: "pending",
    emi: "₹6,550.00",
    charges: "₹0.00",
    amount: "₹6,550.00",
    balanceAfterPayment: "₹18,964.39",
  },

  {
    installmentNumber: 28,
    date: "2nd Nov 2028",
    month: 46,
    type: "pending",
    emi: "₹6,550.00",
    charges: "₹0.00",
    amount: "₹6,550.00",
    balanceAfterPayment: "₹25,514.39",
  },

  {
    installmentNumber: 27,
    date: "2nd Oct 2028",
    month: 45,
    type: "pending",
    emi: "₹6,550.00",
    charges: "₹0.00",
    amount: "₹6,550.00",
    balanceAfterPayment: "₹32,064.39",
  },

  {
    installmentNumber: 26,
    date: "2nd Sep 2028",
    month: 44,
    type: "pending",
    emi: "₹6,550.00",
    charges: "₹0.00",
    amount: "₹6,550.00",
    balanceAfterPayment: "₹38,614.39",
  },

  {
    installmentNumber: 25,
    date: "2nd Aug 2028",
    month: 43,
    type: "pending",
    emi: "₹6,550.00",
    charges: "₹0.00",
    amount: "₹6,550.00",
    balanceAfterPayment: "₹45,164.39",
  },

  {
    installmentNumber: 24,
    date: "2nd Jul 2028",
    month: 42,
    type: "pending",
    emi: "₹6,550.00",
    charges: "₹0.00",
    amount: "₹6,550.00",
    balanceAfterPayment: "₹51,714.39",
  },

  {
    installmentNumber: 23,
    date: "2nd Jun 2028",
    month: 41,
    type: "pending",
    emi: "₹6,550.00",
    charges: "₹0.00",
    amount: "₹6,550.00",
    balanceAfterPayment: "₹58,264.39",
  },

  {
    installmentNumber: 22,
    date: "2nd May 2028",
    month: 40,
    type: "pending",
    emi: "₹6,550.00",
    charges: "₹0.00",
    amount: "₹6,550.00",
    balanceAfterPayment: "₹64,814.39",
  },

  {
    installmentNumber: 21,
    date: "2nd Apr 2028",
    month: 39,
    type: "pending",
    emi: "₹6,550.00",
    charges: "₹0.00",
    amount: "₹6,550.00",
    balanceAfterPayment: "₹71,364.39",
  },

  {
    installmentNumber: 20,
    date: "2nd Mar 2028",
    month: 38,
    type: "pending",
    emi: "₹6,550.00",
    charges: "₹0.00",
    amount: "₹6,550.00",
    balanceAfterPayment: "₹77,914.39",
  },

  {
    installmentNumber: 19,
    date: "2nd Feb 2028",
    month: 37,
    type: "pending",
    emi: "₹6,550.00",
    charges: "₹0.00",
    amount: "₹6,550.00",
    balanceAfterPayment: "₹84,464.39",
  },

  {
    installmentNumber: 18,
    date: "2nd Jan 2028",
    month: 36,
    type: "pending",
    emi: "₹6,550.00",
    charges: "₹0.00",
    amount: "₹6,550.00",
    balanceAfterPayment: "₹91,014.39",
  },

  {
    installmentNumber: 17,
    date: "2nd Dec 2027",
    month: 35,
    type: "pending",
    emi: "₹6,550.00",
    charges: "₹0.00",
    amount: "₹6,550.00",
    balanceAfterPayment: "₹97,564.39",
  },

  {
    installmentNumber: 16,
    date: "2nd Nov 2027",
    month: 34,
    type: "pending",
    emi: "₹6,550.00",
    charges: "₹0.00",
    amount: "₹6,550.00",
    balanceAfterPayment: "₹1,04,114.39",
  },

  {
    installmentNumber: 15,
    date: "2nd Oct 2027",
    month: 33,
    type: "pending",
    emi: "₹6,550.00",
    charges: "₹0.00",
    amount: "₹6,550.00",
    balanceAfterPayment: "₹1,10,664.39",
  },

  {
    installmentNumber: 14,
    date: "2nd Sep 2027",
    month: 32,
    type: "pending",
    emi: "₹6,550.00",
    charges: "₹0.00",
    amount: "₹6,550.00",
    balanceAfterPayment: "₹1,17,214.39",
  },

  {
    installmentNumber: 13,
    date: "2nd Aug 2027",
    month: 31,
    type: "pending",
    emi: "₹6,550.00",
    charges: "₹0.00",
    amount: "₹6,550.00",
    balanceAfterPayment: "₹1,23,764.39",
  },

  {
    installmentNumber: 12,
    date: "2nd Jul 2027",
    month: 30,
    type: "pending",
    emi: "₹6,550.00",
    charges: "₹0.00",
    amount: "₹6,550.00",
    balanceAfterPayment: "₹1,30,314.39",
  },

  {
    installmentNumber: 11,
    date: "2nd Jun 2027",
    month: 29,
    type: "pending",
    emi: "₹6,550.00",
    charges: "₹0.00",
    amount: "₹6,550.00",
    balanceAfterPayment: "₹1,36,864.39",
  },

  {
    installmentNumber: 10,
    date: "2nd May 2027",
    month: 28,
    type: "pending",
    emi: "₹6,550.00",
    charges: "₹0.00",
    amount: "₹6,550.00",
    balanceAfterPayment: "₹1,43,414.39",
  },

  {
    installmentNumber: 9,
    date: "2nd Apr 2027",
    month: 27,
    type: "pending",
    emi: "₹6,550.00",
    charges: "₹0.00",
    amount: "₹6,550.00",
    balanceAfterPayment: "₹1,49,964.39",
  },

  {
    installmentNumber: 8,
    date: "2nd Mar 2027",
    month: 26,
    type: "pending",
    emi: "₹6,550.00",
    charges: "₹0.00",
    amount: "₹6,550.00",
    balanceAfterPayment: "₹1,56,514.39",
  },

  {
    installmentNumber: 7,
    date: "2nd Feb 2027",
    month: 25,
    type: "pending",
    emi: "₹6,550.00",
    charges: "₹0.00",
    amount: "₹6,550.00",
    balanceAfterPayment: "₹1,63,064.39",
  },

  {
    installmentNumber: 6,
    date: "2nd Jan 2027",
    month: 24,
    type: "pending",
    emi: "₹6,550.00",
    charges: "₹0.00",
    amount: "₹6,550.00",
    balanceAfterPayment: "₹1,69,614.39",
  },

  {
    installmentNumber: 5,
    date: "2nd Dec 2026",
    month: 23,
    type: "pending",
    emi: "₹6,550.00",
    charges: "₹0.00",
    amount: "₹6,550.00",
    balanceAfterPayment: "₹1,76,164.39",
  },

  {
    installmentNumber: 4,
    date: "2nd Nov 2026",
    month: 22,
    type: "paid",
    emi: "₹6,550.00",
    charges: "₹0.00",
    amount: "₹6,550.00",
    balanceAfterPayment: "₹1,82,714.39",
  },

  {
    installmentNumber: 3,
    date: "2nd Oct 2026",
    month: 21,
    type: "paid",
    emi: "₹6,550.00",
    charges: "₹0.00",
    amount: "₹6,550.00",
    balanceAfterPayment: "₹1,89,264.39",
  },

  {
    installmentNumber: 2,
    date: "2nd Sep 2026",
    month: 20,
    type: "paid",
    emi: "₹6,550.00",
    charges: "₹935.00",
    amount: "₹7,485.00",
    balanceAfterPayment: "₹1,95,814.39",
  },

  {
    installmentNumber: 1,
    date: "10th Aug 2026",
    month: 19,
    type: "paid",
    emi: "₹6,550.00",
    charges: "₹0.00",
    amount: "₹6,550.00",
    balanceAfterPayment: "₹2,02,364.39",
  },

  {
    month: 18,
    date: "2nd Jul 2026",
    type: "overdue",
    amount: "₹21,949.49",
    totalDues: "₹16,669.49",
    charges: "₹10,560.00",
    emi: "₹11,389.49",
    waiver: {
      rate: "50%",
      amount: "₹5,280.00",
      info: "Pay immediately before this offer expires. Last date: 05 Nov 2026",
    },
    emiPlan: {
      count: 3,
      installment: "₹5,556.50",
    },
  },

  {
    month: 17,
    date: "2nd Jun 2026",
    type: "restructured",
    amount: "₹16,249.49",
    charges: "₹4,860.00",
    emi: "₹11,389.49",
  },

  {
    month: 16,
    date: "2nd May 2026",
    type: "restructured",
    amount: "₹17,149.49",
    charges: "₹5,760.00",
    emi: "₹11,389.49",
  },

  {
    month: 15,
    date: "2nd Apr 2026",
    type: "restructured",
    amount: "₹19,549.49",
    charges: "₹8,160.00",
    emi: "₹11,389.49",
  },

  {
    month: 14,
    date: "2nd Mar 2026",
    type: "restructured",
    amount: "₹22,029.49",
    charges: "₹10,640.00",
    emi: "₹11,389.49",
  },

  {
    month: 13,
    date: "2nd Feb 2026",
    type: "restructured",
    amount: "₹24,269.49",
    charges: "₹12,880.00",
    emi: "₹11,389.49",
  },

  {
    month: 12,
    date: "2nd Jan 2026",
    type: "restructured",
    amount: "₹26,749.49",
    charges: "₹15,360.00",
    emi: "₹11,389.49",
  },

  {
    month: 11,
    date: "2nd Dec 2025",
    type: "restructured",
    amount: "₹29,229.49",
    charges: "₹17,840.00",
    emi: "₹11,389.49",
  },

  {
    month: 10,
    date: "2nd Nov 2025",
    type: "paid",
    amount: "₹11,389.49",
  },

  {
    month: 9,
    date: "2nd Oct 2025",
    type: "paid",
    amount: "₹11,389.49",
  },

  {
    month: 8,
    date: "2nd Sep 2025",
    type: "paid",
    amount: "₹11,389.49",
  },

  {
    month: 7,
    date: "2nd Aug 2025",
    type: "paid",
    amount: "₹11,389.49",
  },

  {
    month: 6,
    date: "2nd Jul 2025",
    type: "paid",
    amount: "₹11,389.49",
  },

  {
    month: 5,
    date: "2nd Jun 2025",
    type: "paid",
    amount: "₹11,389.49",
  },

  {
    month: 4,
    date: "2nd May 2025",
    type: "paid",
    amount: "₹11,389.49",
  },

  {
    month: 3,
    date: "2nd Apr 2025",
    type: "paid",
    amount: "₹11,389.49",
  },

  {
    month: 2,
    date: "2nd Mar 2025",
    type: "paid",
    amount: "₹11,389.49",
  },

  {
    month: 1,
    date: "2nd Feb 2025",
    type: "paid",
    amount: "₹11,389.49",
  }
];

const PaytmLoanScreen = ({ navigation }) => {
  const [expandedMonth, setExpandedMonth] = useState(null);
  const [paymentPlan, setPaymentPlan] = useState("full"); // 'full' | 'emi3'

  const toggleExpanded = (month) => {
    setExpandedMonth(expandedMonth === month ? null : month);
  };

  const renderTimelineLabels = (item, { bold = false, mutedDate = true } = {}) => {
    const titleStyle = bold ? styles.timelineMonthBold : styles.timelineMonth;
    const dateStyle = mutedDate ? styles.timelineDateMuted : styles.timelineDate;

    if (item.installmentNumber != null) {
      return (
        <>
          <View style={styles.labelWithIcon}>
            <Ionicons name="layers-outline" size={13} color="#666" />
            <Text style={titleStyle} numberOfLines={1}>
              Installment{' '}
              <Text style={styles.installmentNumberBold}>{item.installmentNumber}</Text>
              <Text style={styles.installmentMeta}> · Mo {item.month}</Text>
            </Text>
          </View>
          <View style={styles.labelWithIcon}>
            <Ionicons name="calendar-outline" size={11} color="#999" />
            <Text style={dateStyle} numberOfLines={1}>{item.date}</Text>
          </View>
        </>
      );
    }

    return (
      <>
        <Text style={titleStyle}>Month {item.month}</Text>
        <View style={styles.labelWithIcon}>
          <Ionicons name="calendar-outline" size={12} color="#999" />
          <Text style={dateStyle}>{item.date}</Text>
        </View>
      </>
    );
  };

  const renderInstallmentCard = (item, index, variant) => {
    const isPending = variant === "pending";
    const isExpanded = expandedMonth === item.month;
    const canExpand = item.emi != null || item.balanceAfterPayment != null;
    const statusColor = isPending ? "#d97706" : "#059669";
    const statusIcon = isPending ? "hourglass-outline" : "checkmark-circle";
    const statusLabel = isPending ? "pending" : "paid";

    return (
      <View
        key={`${item.month}-${index}`}
        style={[
          styles.installmentCard,
          isPending ? styles.installmentCardPending : styles.installmentCardPaid,
        ]}
      >
        <TouchableOpacity
          style={styles.installmentCardHeader}
          onPress={() => canExpand && toggleExpanded(item.month)}
          activeOpacity={canExpand ? 0.75 : 1}
        >
          <View
            style={[
              styles.installmentStatusDot,
              isPending
                ? styles.installmentStatusDotPending
                : styles.installmentStatusDotPaid,
            ]}
          >
            <Ionicons
              name={isPending ? "time" : "checkmark"}
              size={11}
              color="#fff"
            />
          </View>

          <View style={styles.installmentCardMain}>
            <View style={styles.installmentCardTop}>
              <View style={styles.installmentCardLeft}>
                {renderTimelineLabels(item)}
              </View>
              <View
                style={[
                  styles.installmentStatusBadge,
                  isPending
                    ? styles.installmentStatusBadgePending
                    : styles.installmentStatusBadgePaid,
                ]}
              >
                <Ionicons name={statusIcon} size={11} color={statusColor} />
                <Text
                  style={[
                    styles.installmentStatusText,
                    { color: statusColor },
                  ]}
                  numberOfLines={1}
                >
                  {statusLabel}
                </Text>
                {canExpand && (
                  <Ionicons
                    name={isExpanded ? "chevron-up" : "chevron-down"}
                    size={12}
                    color={statusColor}
                  />
                )}
              </View>
            </View>

            <View style={styles.installmentAmountRow}>
              <Text style={styles.installmentAmountLabel}>EMI amount</Text>
              <Text
                style={[
                  styles.installmentAmountValue,
                  { color: statusColor },
                ]}
                numberOfLines={1}
              >
                {item.amount}
              </Text>
            </View>

            {/* {item.balanceAfterPayment != null && (
              <View style={styles.installmentBalanceRow}>
                <Text style={styles.installmentBalanceLabel}>
                  Balance after payment
                </Text>
                <Text style={styles.installmentBalanceValue} numberOfLines={1}>
                  {item.balanceAfterPayment}
                </Text>
              </View>
            )} */}
          </View>
        </TouchableOpacity>

        {isExpanded && canExpand && (
          <View style={styles.installmentCardDetails}>
            {renderRepaymentDetails(item)}
          </View>
        )}
      </View>
    );
  };

  const renderDetailRow = (icon, iconColor, label, value, labelStyle, valueStyle) => (
    <View style={styles.repaymentRow}>
      <View style={styles.repaymentLabelRow}>
        <Ionicons name={icon} size={13} color={iconColor} />
        <Text style={labelStyle} numberOfLines={1}>{label}</Text>
      </View>
      <Text style={[valueStyle, styles.repaymentValueShrink]} numberOfLines={1}>
        {value}
      </Text>
    </View>
  );

  const renderRepaymentDetails = (item) => (
    <View style={styles.expandableDetails}>
      {item.installmentNumber != null &&
        renderDetailRow(
          'layers-outline',
          '#666',
          'Installment',
          item.installmentNumber,
          styles.repaymentLabel,
          styles.repaymentAmountBold
        )}
      {item.installmentNumber != null &&
        item.month != null &&
        renderDetailRow(
          'calendar-outline',
          '#666',
          'Month',
          item.month,
          styles.repaymentLabel,
          styles.repaymentAmountBold
        )}
      {item.emi != null &&
        renderDetailRow(
          'flash-outline',
          '#007aff',
          'Automatic Payment',
          item.emi,
          styles.repaymentLabel,
          styles.repaymentAmount
        )}
      {item.charges != null && (
        <View style={[styles.repaymentRow, styles.chargesRow]}>
          <View style={styles.repaymentLabelRow}>
            <Ionicons name="alert-circle-outline" size={13} color="#e65100" />
            <Text style={styles.chargesLabel}>Charges</Text>
          </View>
          <Text style={styles.chargesAmount} numberOfLines={1}>
            {item.charges}
          </Text>
        </View>
      )}
      {item.waiver != null && (
        <View style={styles.waiverBlock}>
          <View style={[styles.repaymentRow, styles.waiverRow]}>
            <View style={styles.repaymentLabelRow}>
              <Ionicons name="pricetag-outline" size={11} color="#047857" />
              <Text style={styles.waiverLabel}>
                Charges Waiver ({item.waiver.rate})
              </Text>
            </View>
            <Text style={styles.waiverAmount}>-{item.waiver.amount}</Text>
          </View>
          {item.waiver.info != null && (
            <View style={styles.waiverInfoRow}>
              <Ionicons name="information-circle-outline" size={11} color="#b45309" />
              <Text style={styles.waiverInfoText}>{item.waiver.info}</Text>
            </View>
          )}
        </View>
      )}
      {item.balanceAfterPayment != null && (
        <View style={styles.totalDuesRow}>
          <View style={styles.repaymentLabelRow}>
            <Ionicons name="wallet-outline" size={14} color="#333" />
            <Text style={styles.totalDuesLabel}>Balance After Payment</Text>
          </View>
          <Text style={styles.totalDuesAmount} numberOfLines={1}>
            {item.balanceAfterPayment}
          </Text>
        </View>
      )}
      {(item.totalDues != null || item.amount != null) &&
        item.balanceAfterPayment == null && (
        <View
          style={[
            styles.totalDuesRow,
            item.waiver != null && styles.totalDuesRowCompact,
          ]}
        >
          <View style={styles.repaymentLabelRow}>
            <MaterialCommunityIcons
              name="cash"
              size={item.waiver != null ? 12 : 14}
              color="#333"
            />
            <Text
              style={[
                styles.totalDuesLabel,
                item.waiver != null && styles.totalDuesLabelCompact,
              ]}
            >
              Total Dues Remaining
            </Text>
          </View>
          <Text
            style={[
              styles.totalDuesAmount,
              item.waiver != null && styles.totalDuesAmountCompact,
            ]}
            numberOfLines={1}
          >
            {item.totalDues ?? item.amount}
          </Text>
        </View>
      )}
      {item.emiPlan != null && (
        <View style={styles.payPlanBlock}>
          <Text style={styles.payPlanTitle}>CHOOSE PAYMENT OPTION</Text>
          <TouchableOpacity
            style={[
              styles.payPlanOption,
              paymentPlan === "full" && styles.payPlanOptionSelected,
            ]}
            onPress={() => setPaymentPlan("full")}
            activeOpacity={0.8}
          >
            <View style={styles.payPlanOptionLeft}>
              <Ionicons
                name={
                  paymentPlan === "full"
                    ? "radio-button-on"
                    : "radio-button-off"
                }
                size={14}
                color={paymentPlan === "full" ? "#047857" : "#999"}
              />
              <View style={styles.payPlanOptionTextWrap}>
                <Text style={styles.payPlanOptionTitle}>Pay in full</Text>
                <Text style={styles.payPlanOptionSub}>
                  clear total dues now
                </Text>
              </View>
            </View>
            <Text style={styles.payPlanOptionAmount}>
              {item.totalDues ?? item.amount}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.payPlanOption,
              paymentPlan === "emi3" && styles.payPlanOptionSelected,
            ]}
            onPress={() => setPaymentPlan("emi3")}
            activeOpacity={0.8}
          >
            <View style={styles.payPlanOptionLeft}>
              <Ionicons
                name={
                  paymentPlan === "emi3"
                    ? "radio-button-on"
                    : "radio-button-off"
                }
                size={14}
                color={paymentPlan === "emi3" ? "#047857" : "#999"}
              />
              <View style={styles.payPlanOptionTextWrap}>
                <Text style={styles.payPlanOptionTitle}>
                  Pay in {item.emiPlan.count} EMIs
                </Text>
                <Text style={styles.payPlanOptionSub}>
                  {item.emiPlan.installment} × {item.emiPlan.count}{" "}
                  installments
                </Text>
              </View>
            </View>
            <Text style={styles.payPlanOptionAmount}>
              {item.emiPlan.installment}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.payPlanButton}
            onPress={() => {
              const payAmount =
                paymentPlan === "emi3"
                  ? item.emiPlan.installment
                  : item.totalDues ?? item.amount;
              Alert.alert(
                "Confirm payment",
                paymentPlan === "emi3"
                  ? `Pay first EMI of ${payAmount} now (${item.emiPlan.count} EMI plan).`
                  : `Pay full amount of ${payAmount} now.`,
                [
                  { text: "Cancel", style: "cancel" },
                  { text: "Pay", style: "default" },
                ]
              );
            }}
            activeOpacity={0.85}
          >
            <Ionicons name="flash" size={12} color="#fff" />
            <Text style={styles.payPlanButtonText}>
              {paymentPlan === "emi3"
                ? `Pay ${item.emiPlan.installment}`
                : `Pay ${item.totalDues ?? item.amount}`}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );

  const renderTimelineItem = (item, index) => {
    if (item.type === "complete") {
      return (
        <View
          key={`${item.month}-${index}`}
          style={[styles.timelineRow, styles.timelineRowComplete]}
        >
          <View style={styles.dotWrap}>
            <View style={[styles.dotIcon, styles.dotIconComplete]}>
              <Ionicons name="trophy" size={12} color="#fff" />
            </View>
          </View>
          <View style={styles.timelineContent}>
            <View style={styles.timelineRowInner}>
              <View>
                <Text style={styles.timelineMonthBold}>Month {item.month}</Text>
                <View style={styles.labelWithIcon}>
                  <Ionicons name="calendar-outline" size={12} color="#999" />
                  <Text style={styles.timelineDate}>{item.date}</Text>
                </View>
              </View>
              <View style={styles.badgeComplete}>
                <Ionicons name="checkmark-done" size={14} color="#0d9488" />
                <Text style={styles.badgeCompleteText}>{item.label}</Text>
              </View>
            </View>
          </View>
        </View>
      );
    }

    if (item.type === "current") {
      return (
        <React.Fragment key={`${item.month}-${index}`}>
          <View style={styles.currentIndicatorWrap}>
            <View style={styles.currentIndicator}>
              <Ionicons name="locate" size={12} color="#fff" />
              <Text style={styles.currentIndicatorText}>You are here</Text>
            </View>
          </View>
          <View style={[styles.timelineRow, styles.timelineRowCurrent]}>
            <View style={styles.dotWrap}>
              <View style={[styles.dotIcon, styles.dotIconCurrent]}>
                <Ionicons name="radio-button-on" size={14} color="#007aff" />
              </View>
            </View>
            <View style={styles.timelineContent}>
              <View style={styles.timelineRowInner}>
                <View>
                  <Text style={styles.timelineMonthBold}>
                    Month {item.month}
                  </Text>
                  <View style={styles.labelWithIcon}>
                    <Ionicons name="calendar-outline" size={12} color="#999" />
                    <Text style={styles.timelineDate}>{item.date}</Text>
                  </View>
                  {item.dueIn ? (
                    <View style={styles.dueInRow}>
                      <Ionicons name="time-outline" size={12} color="#d97706" />
                      <Text style={styles.dueInText}>{item.dueIn}</Text>
                    </View>
                  ) : null}
                </View>
                <View style={styles.badgePending}>
                  <Ionicons name="hourglass-outline" size={12} color="#d97706" />
                  <Text style={styles.badgePendingText}>
                    {item.amount} pending
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </React.Fragment>
      );
    }

    if (item.type === "overdue") {
      const isExpanded = expandedMonth === item.month;
      return (
        <View
          key={`${item.month}-${index}`}
          style={[styles.timelineRow, styles.timelineRowOverdue]}
        >
          <View style={styles.dotWrap}>
            <View style={[styles.dotIcon, styles.dotIconOverdue]}>
              <Ionicons name="alert" size={12} color="#fff" />
            </View>
          </View>
          <View style={styles.timelineContent}>
            <View style={styles.timelineRowInner}>
              <View>
                {renderTimelineLabels(item, { bold: true, mutedDate: false })}
              </View>
              <TouchableOpacity
                style={styles.badgeOverdue}
                onPress={() => toggleExpanded(item.month)}
                activeOpacity={0.8}
              >
                <Ionicons name="alert-circle" size={14} color="#c62828" />
                <Text style={styles.badgeOverdueText}>
                  {item.amount} Overdue
                </Text>
                <Ionicons
                  name={isExpanded ? "chevron-up" : "chevron-down"}
                  size={14}
                  color="#c62828"
                />
              </TouchableOpacity>
            </View>
            {isExpanded && renderRepaymentDetails(item)}
          </View>
        </View>
      );
    }

    if (item.type === "pending") {
      return renderInstallmentCard(item, index, "pending");
    }

    if (item.type === "paid") {
      return renderInstallmentCard(item, index, "paid");
    }

    if (item.type === "restructured") {
      const isExpanded = expandedMonth === item.month;
      const canExpand = item.emi != null || item.charges != null;
      return (
        <View
          key={`${item.month}-${index}`}
          style={[styles.timelineRow, styles.timelineRowRestructured]}
        >
          <View style={styles.dotWrap}>
            <View style={[styles.dotIcon, styles.dotIconRestructured]}>
              <Ionicons name="swap-horizontal" size={12} color="#fff" />
            </View>
          </View>
          <View style={styles.timelineContent}>
            <View style={styles.timelineRowInner}>
              <View>
                <Text style={styles.timelineMonthBold}>Month {item.month}</Text>
                <View style={styles.labelWithIcon}>
                  <Ionicons name="calendar-outline" size={12} color="#999" />
                  <Text style={styles.timelineDate}>{item.date}</Text>
                </View>
              </View>
              {canExpand ? (
                <TouchableOpacity
                  style={styles.badgeRestructured}
                  onPress={() => toggleExpanded(item.month)}
                  activeOpacity={0.8}
                >
                  <Ionicons name="swap-horizontal" size={14} color="#7CB518" />
                  <Text style={styles.badgeRestructuredText}>
                    {item.amount} restructured
                  </Text>
                  <Ionicons
                    name={isExpanded ? "chevron-up" : "chevron-down"}
                    size={14}
                    color="#7CB518"
                  />
                </TouchableOpacity>
              ) : (
                <View style={styles.badgeRestructured}>
                  <Ionicons name="swap-horizontal" size={14} color="#7CB518" />
                  <Text style={styles.badgeRestructuredText}>
                    {item.amount} restructured
                  </Text>
                </View>
              )}
            </View>
            {canExpand && isExpanded && renderRepaymentDetails(item)}
          </View>
        </View>
      );
    }

    return null;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation?.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#1a1a1a" />
        </TouchableOpacity>
        <View style={styles.headerTitleRow}>
          <Ionicons name="wallet-outline" size={20} color="#1a1a1a" />
          <Text style={styles.headerTitle}>Loan Account</Text>
        </View>
        <View style={styles.headerRight} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        style={styles.scroll}
      >
        {/* Left panel / Summary card */}
        <View style={styles.summaryCard}>
          <View style={styles.poweredByRow}>
            <Ionicons name="flash" size={14} color="#007aff" />
            <Text style={styles.poweredBy}>Powered by Paytm</Text>
          </View>
          <View style={styles.amountRow}>
            <Text style={styles.amountCurrent}>₹ 1,63,816.08</Text>
            <Text style={styles.amountStrike}>₹2,00,000</Text>
            <View style={styles.infoCircle}>
              <Ionicons name="information" size={12} color="#666" />
            </View>
          </View>
          <View style={styles.accountNoRow}>
            <Ionicons name="card-outline" size={14} color="#666" />
            <Text style={styles.accountNo}>
              Loan A/C No. MFLPAYTMFOLOQ005526923
            </Text>
          </View>
          <TouchableOpacity style={styles.loanDetailsLink} onPress={() => {}} activeOpacity={0.8}>
            <Text style={styles.loanDetailsLinkText}>Loan details</Text>
            <Ionicons name="chevron-forward" size={16} color="#007aff" />
          </TouchableOpacity>
          <View style={styles.statusRow}>
            <View style={styles.statusLeft}>
              <Ionicons name="checkmark-circle" size={22} color="#00c853" />
              <View>
                <Text style={styles.statusTitle}>Total Dues Paid</Text>
                <View style={styles.statusSubtitleRow}>
                  <Ionicons name="calendar-outline" size={12} color="#666" />
                  <Text style={styles.statusSubtitle}>
                    Next due on 2nd Apr 2026
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={styles.payMoreButton}
              onPress={() => {}}
              activeOpacity={0.8}
            >
              <Ionicons name="cash-outline" size={16} color="#fff" />
              <Text style={styles.payMoreButtonText}>Pay More</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.uploadCard}>
            <View style={styles.uploadLeft}>
              <View style={styles.uploadIconWrap}>
                <Ionicons name="cloud-upload-outline" size={22} color="#007aff" />
              </View>
              <View>
                <Text style={styles.uploadTitle}>Upload Business Proof</Text>
                <Text style={styles.uploadSubtitle}>
                  Benefits on your next loan
                </Text>
              </View>
            </View>
            <TouchableOpacity style={styles.uploadButton} activeOpacity={0.8}>
              <Ionicons name="arrow-up-circle-outline" size={16} color="#007aff" />
              <Text style={styles.uploadButtonText}>Upload Now</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Timeline section */}
        <View style={styles.timelineSection}>
          <View style={styles.timelineHeader}>
            <View style={styles.timelineTitleRow}>
              <Ionicons name="time-outline" size={18} color="#1a1a1a" />
              <Text style={styles.timelineSectionTitle}>Repayment History</Text>
            </View>
            <View style={styles.legendRow}>
              <View style={styles.legendItem}>
                <Ionicons name="checkmark-circle" size={12} color="#00c853" />
                <Text style={styles.legendText}>Paid</Text>
              </View>
              <View style={styles.legendItem}>
                <Ionicons name="hourglass-outline" size={12} color="#d97706" />
                <Text style={styles.legendText}>Pending</Text>
              </View>
              <View style={styles.legendItem}>
                <Ionicons name="alert-circle" size={12} color="#c62828" />
                <Text style={styles.legendText}>Overdue</Text>
              </View>
              <View style={styles.legendItem}>
                <Ionicons name="swap-horizontal" size={12} color="#7CB518" />
                <Text style={styles.legendText}>Restructured</Text>
              </View>
            </View>
          </View>
          <View style={styles.timelineList}>
            {TIMELINE_DATA.map((item, index) =>
              renderTimelineItem(item, index),
            )}
          </View>
          <View style={styles.timelineFooter}>
            <View style={styles.footerLine} />
            <View style={styles.footerTextRow}>
              <Ionicons name="ellipsis-horizontal" size={14} color="#999" />
              <Text style={styles.footerText}>Previous payments continue...</Text>
            </View>
            <View style={styles.footerLine} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 12,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5",
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    marginLeft: -8,
  },
  headerTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  headerRight: {
    width: 40,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  summaryCard: {
    backgroundColor: "#fff",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5",
  },
  poweredByRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginBottom: 8,
  },
  poweredBy: {
    fontSize: 10,
    color: "#666",
  },
  amountRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  amountCurrent: {
    fontSize: 28,
    fontWeight: "700",
    color: "#333",
    marginRight: 12,
  },
  amountStrike: {
    fontSize: 16,
    color: "#666",
    textDecorationLine: "line-through",
  },
  infoCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: "#e8f4ff",
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  accountNoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 6,
  },
  accountNo: {
    fontSize: 12,
    color: "#888",
    fontFamily: "monospace",
    flex: 1,
  },
  loanDetailsLink: {
    alignSelf: "flex-start",
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  loanDetailsLinkText: {
    color: "#007aff",
    fontSize: 14,
    fontWeight: "500",
  },
  statusRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    flexWrap: "wrap",
    gap: 12,
  },
  statusLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  statusTitle: {
    fontWeight: "600",
    color: "#333",
    fontSize: 14,
  },
  statusSubtitleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 2,
  },
  statusSubtitle: {
    fontSize: 12,
    color: "#666",
  },
  payMoreButton: {
    backgroundColor: "#007aff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 24,
    shadowColor: "#007aff",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 3,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  payMoreButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
  },
  uploadCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f8f9ff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e3f2fd",
  },
  uploadLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  uploadIconWrap: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: "#007aff",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  uploadTitle: {
    fontWeight: "600",
    color: "#333",
    fontSize: 14,
    marginBottom: 2,
  },
  uploadSubtitle: {
    fontSize: 12,
    color: "#666",
  },
  uploadButton: {
    borderWidth: 1,
    borderColor: "#007aff",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  uploadButtonText: {
    color: "#007aff",
    fontSize: 12,
    fontWeight: "500",
  },
  timelineSection: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: 8,
  },
  timelineHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "#fafbfc",
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5",
  },
  timelineTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 8,
  },
  timelineSectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
    margin: 0,
  },
  legendRow: {
    flexDirection: "row",
    gap: 12,
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  legendDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  legendDotPaid: { backgroundColor: "#34c759" },
  legendDotOverdue: { backgroundColor: "#ff9500" },
  legendDotRestructured: { backgroundColor: "#C6E84A" },
  legendText: {
    fontSize: 12,
    color: "#666",
  },
  timelineList: {
    padding: 20,
  },
  timelineRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 24,
  },
  installmentCard: {
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 10,
    overflow: "hidden",
  },
  installmentCardPending: {
    backgroundColor: "#fffdf7",
    borderColor: "#fde68a",
  },
  installmentCardPaid: {
    backgroundColor: "#f7fdf9",
    borderColor: "#bbf7d0",
  },
  installmentCardHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 12,
    gap: 10,
  },
  installmentStatusDot: {
    width: 22,
    height: 22,
    borderRadius: 11,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 1,
  },
  installmentStatusDotPending: {
    backgroundColor: "#d97706",
  },
  installmentStatusDotPaid: {
    backgroundColor: "#16a34a",
  },
  installmentCardMain: {
    flex: 1,
    minWidth: 0,
  },
  installmentCardTop: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 8,
  },
  installmentCardLeft: {
    flex: 1,
    minWidth: 0,
  },
  installmentStatusBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
    paddingVertical: 3,
    paddingHorizontal: 7,
    borderRadius: 999,
    borderWidth: 1,
    flexShrink: 0,
  },
  installmentStatusBadgePending: {
    backgroundColor: "#fff7ed",
    borderColor: "#fdba74",
  },
  installmentStatusBadgePaid: {
    backgroundColor: "#ecfdf5",
    borderColor: "#86efac",
  },
  installmentStatusText: {
    fontSize: 10,
    fontWeight: "700",
    textTransform: "capitalize",
  },
  installmentAmountRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
    gap: 8,
  },
  installmentAmountLabel: {
    fontSize: 11,
    color: "#6b7280",
    fontWeight: "500",
  },
  installmentAmountValue: {
    fontSize: 13,
    fontWeight: "700",
    flexShrink: 1,
    textAlign: "right",
  },
  installmentBalanceRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 6,
    paddingTop: 6,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: "rgba(0,0,0,0.08)",
    gap: 8,
  },
  installmentBalanceLabel: {
    fontSize: 11,
    color: "#6b7280",
    fontWeight: "500",
    flexShrink: 1,
  },
  installmentBalanceValue: {
    fontSize: 12,
    fontWeight: "700",
    color: "#111827",
    flexShrink: 1,
    textAlign: "right",
  },
  installmentCardDetails: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: "rgba(0,0,0,0.08)",
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
  installmentMeta: {
    fontSize: 12,
    color: "#9ca3af",
    fontWeight: "500",
  },
  timelineRowComplete: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: "#e8f5e9",
    borderWidth: 1,
    borderColor: "#bbf7d0",
  },
  timelineRowCurrent: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: "#f0f9ff",
    borderWidth: 1,
    borderColor: "#bae6fd",
  },
  timelineRowOverdue: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: "#f0f9ff",
    borderWidth: 1,
    borderColor: "#bae6fd",
  },
  timelineRowRestructured: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: "#F7FCE8",
    borderWidth: 1,
    borderColor: "#D4E86A",
  },
  dotWrap: {
    marginRight: 24,
    marginTop: 2,
  },
  dotIcon: {
    width: 22,
    height: 22,
    borderRadius: 11,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#fff",
  },
  dotIconComplete: {
    backgroundColor: "#0d9488",
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  dotIconCurrent: {
    backgroundColor: "#e8f4ff",
    borderColor: "#007aff",
  },
  dotIconOverdue: {
    backgroundColor: "#c62828",
  },
  dotIconPending: {
    backgroundColor: "#d97706",
  },
  dotIconPaid: {
    backgroundColor: "#34c759",
  },
  dotIconRestructured: {
    backgroundColor: "#7CB518",
  },
  labelWithIcon: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 2,
  },
  dueInRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 2,
  },
  repaymentLabelRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    flex: 1,
    paddingRight: 8,
  },
  dot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#fff",
  },
  dotComplete: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 4,
    backgroundColor: "#10b981",
    borderColor: "#fff",
  },
  dotCurrent: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 3,
    backgroundColor: "#34c759",
    borderColor: "#fff",
  },
  dotPaid: {
    backgroundColor: "#34c759",
    borderColor: "#fff",
  },
  dotRestructured: {
    backgroundColor: "#C6E84A",
    borderColor: "#fff",
  },
  timelineContent: {
    flex: 1,
  },
  timelineRowInner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 8,
  },
  timelineMonth: {
    fontWeight: "600",
    color: "#374151",
    fontSize: 13,
    marginBottom: 2,
    flexShrink: 1,
  },
  timelineMonthBold: {
    fontWeight: "700",
    color: "#1a1a1a",
    fontSize: 15,
    marginBottom: 2,
    flexShrink: 1,
  },
  timelineDate: {
    fontSize: 12,
    color: "#6b7280",
    fontWeight: "500",
    flexShrink: 1,
  },
  timelineDateMuted: {
    fontSize: 11,
    color: "#9ca3af",
    fontWeight: "500",
    flexShrink: 1,
  },
  dueInText: {
    fontSize: 13,
    color: "#dc2626",
    fontWeight: "600",
    marginTop: 2,
  },
  installmentText: {
    fontSize: 12,
    color: "#9ca3af",
    fontWeight: "500",
    marginTop: 2,
  },
  installmentNumberBold: {
    fontWeight: "700",
    color: "#374151",
  },
  pendingChevron: {
    marginLeft: 6,
  },
  badgeComplete: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "rgba(16, 185, 129, 0.15)",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(16, 185, 129, 0.3)",
    maxWidth: "55%",
  },
  badgeCompleteText: {
    fontWeight: "700",
    color: "#059669",
    fontSize: 12,
    flexShrink: 1,
  },
  badgePending: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: "#fff7ed",
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#fdba74",
  },
  badgePendingText: {
    fontWeight: "600",
    color: "#d97706",
    fontSize: 11,
  },
  badgeOverdue: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: "rgba(220, 38, 38, 0.15)",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  badgeOverdueText: {
    fontWeight: "600",
    color: "#dc2626",
    fontSize: 16,
  },
  badgePaid: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: "rgba(16, 185, 129, 0.1)",
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#86efac",
  },
  badgePaidText: {
    fontWeight: "600",
    color: "#059669",
    fontSize: 11,
  },
  badgeRestructured: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: "rgba(198, 232, 74, 0.35)",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  badgeRestructuredText: {
    fontWeight: "600",
    color: "#7CB518",
    fontSize: 16,
  },
  currentIndicatorWrap: {
    marginBottom: 8,
  },
  currentIndicator: {
    alignSelf: "flex-start",
    backgroundColor: "#34c759",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  currentIndicatorText: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "600",
  },
  expandableDetails: {
    marginTop: 8,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 6,
    borderWidth: 1,
    borderColor: "#f3f4f6",
  },
  repaymentRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 7,
    paddingHorizontal: 10,
    backgroundColor: "#fff7ed",
    borderRadius: 6,
    borderLeftWidth: 3,
    borderLeftColor: "#d97706",
    marginBottom: 6,
    gap: 8,
  },
  repaymentLabel: {
    color: "#6b7280",
    fontSize: 12,
    flexShrink: 1,
  },
  repaymentAmount: {
    fontWeight: "600",
    color: "#d97706",
    fontSize: 12,
  },
  repaymentAmountBold: {
    fontWeight: "700",
    color: "#d97706",
    fontSize: 12,
  },
  repaymentValueShrink: {
    flexShrink: 1,
    textAlign: "right",
    maxWidth: "48%",
  },
  chargesRow: {
    backgroundColor: "rgba(220, 38, 38, 0.15)",
    borderLeftWidth: 0,
  },
  chargesLabel: {
    color: "#dc2626",
    fontSize: 12,
  },
  chargesAmount: {
    fontWeight: "600",
    color: "#dc2626",
    fontSize: 12,
    flexShrink: 1,
    textAlign: "right",
    maxWidth: "48%",
  },
  waiverBlock: {
    marginBottom: 6,
  },
  waiverRow: {
    backgroundColor: "rgba(16, 185, 129, 0.12)",
    borderLeftWidth: 0,
    marginBottom: 0,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  waiverLabel: {
    color: "#047857",
    fontSize: 11,
  },
  waiverAmount: {
    fontWeight: "600",
    color: "#047857",
    fontSize: 11,
  },
  waiverInfoRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 4,
    marginTop: 4,
    paddingHorizontal: 8,
    paddingVertical: 5,
    backgroundColor: "#fff7ed",
    borderRadius: 5,
  },
  waiverInfoText: {
    flex: 1,
    color: "#b45309",
    fontSize: 10,
    lineHeight: 13,
  },
  totalDuesRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff7ed",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "rgba(16, 185, 129, 0.2)",
    marginTop: 6,
    gap: 8,
  },
  totalDuesRowCompact: {
    paddingVertical: 7,
    paddingHorizontal: 10,
    marginTop: 6,
    borderRadius: 6,
  },
  totalDuesLabel: {
    fontWeight: "600",
    color: "#374151",
    fontSize: 12,
    flexShrink: 1,
  },
  totalDuesLabelCompact: {
    fontSize: 11,
  },
  totalDuesAmount: {
    fontWeight: "700",
    color: "#d97706",
    fontSize: 13,
    flexShrink: 1,
    textAlign: "right",
  },
  totalDuesAmountCompact: {
    fontSize: 12,
  },
  payPlanBlock: {
    marginTop: 8,
  },
  payPlanTitle: {
    fontSize: 9,
    fontWeight: "700",
    color: "#6b7280",
    letterSpacing: 0.8,
    marginBottom: 5,
  },
  payPlanOption: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 7,
    paddingVertical: 6,
    paddingHorizontal: 8,
    marginBottom: 5,
    backgroundColor: "#fff",
  },
  payPlanOptionSelected: {
    borderColor: "#047857",
    backgroundColor: "#ecfdf5",
  },
  payPlanOptionLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    flex: 1,
    paddingRight: 6,
  },
  payPlanOptionTextWrap: {
    flex: 1,
  },
  payPlanOptionTitle: {
    fontSize: 11,
    fontWeight: "700",
    color: "#1a1a1a",
  },
  payPlanOptionSub: {
    fontSize: 9,
    color: "#6b7280",
    marginTop: 1,
  },
  payPlanOptionAmount: {
    fontSize: 11,
    fontWeight: "700",
    color: "#1a1a1a",
  },
  payPlanButton: {
    marginTop: 2,
    backgroundColor: "#047857",
    borderRadius: 6,
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 4,
  },
  payPlanButtonText: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "700",
  },
  timelineFooter: {
    alignItems: "center",
    paddingVertical: 40,
  },
  footerLine: {
    width: 40,
    height: 2,
    backgroundColor: "#e5e7eb",
    marginVertical: 10,
  },
  footerTextRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  footerText: {
    color: "#9ca3af",
    fontStyle: "italic",
    fontSize: 13,
  },
});

export default PaytmLoanScreen;
