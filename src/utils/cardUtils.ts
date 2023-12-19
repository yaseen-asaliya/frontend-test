import localization from "../../localizationConfig";
const convertToArabicNumeral = (numberStr: string): string => {
  const arabicNumerals = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"]
  const arabicNumeralStr = numberStr
    .split("")
    .map((digit) =>
      /\d/.test(digit) ? arabicNumerals[parseInt(digit)] : digit
    )
    .join("");

  return arabicNumeralStr;
};

export const formatDynamicText = (
    elements: string[],
    separator: string = ", ",
    threshold: number = 2,
    othersText: string = localization.others
  ): string => {
    const extraElementsCount = elements.length - threshold;
    const displayedElements = elements.slice(0, threshold).join(separator);
  
    if (localization.getLanguage() == "ar") {
      const arabicExtraElements = convertToArabicNumeral(extraElementsCount.toString());
      return `${displayedElements} ....+${arabicExtraElements} ${othersText}`;
    }
  
    return `${displayedElements} ....+${extraElementsCount} ${othersText}`;
  };
