import React, { useState, useEffect } from "react";
import { useWeather } from "../context/WeatherContext";
import { useLanguage } from "../context/LanguageContext";
import {
   FiSun,
   FiMoon,
   FiThermometer,
   FiMapPin,
   FiBell,
   FiRefreshCw,
   FiGlobe,
   FiDroplet,
   FiWind,
   FiCheck,
} from "react-icons/fi";
import styles from "./Settings.module.css";

const Settings = () => {
   const {
      unit,
      toggleUnit,
      theme,
      toggleTheme,
      language,
      setLanguage,
      notifications,
      setNotifications,
      autoRefresh,
      setAutoRefresh,
      refreshInterval,
      setRefreshInterval,
      notificationTypes,
      setNotificationTypes,
   } = useWeather();

   const { t } = useLanguage();

   const [localNotificationTypes, setLocalNotificationTypes] = useState({
      rain: notificationTypes?.rain ?? true,
      storm: notificationTypes?.storm ?? true,
      extremeTemp: notificationTypes?.extremeTemp ?? false,
      snow: notificationTypes?.snow ?? false,
      wind: notificationTypes?.wind ?? false,
   });

   useEffect(() => {
      if (setNotificationTypes) {
         setNotificationTypes(localNotificationTypes);
      }
   }, [localNotificationTypes, setNotificationTypes]);

   const handleNotificationTypeChange = (type) => {
      setLocalNotificationTypes((prev) => ({
         ...prev,
         [type]: !prev[type],
      }));
   };

   const [showSaved, setShowSaved] = useState(false);

   const handleSaveSettings = () => {
      setShowSaved(true);
      setTimeout(() => setShowSaved(false), 2000);
   };

   return (
      <div className={styles.container}>
         <div className={styles.header}>
            <h1 className={styles.title}>{t.settings.title}</h1>
            {showSaved && (
               <div className={styles.savedNotification}>
                  <FiCheck /> {t.settings.saved}
               </div>
            )}
         </div>

         <div className={styles.settingsGrid}>
            {/* Appearance Section */}
            <div className={styles.section}>
               <h2 className={styles.sectionTitle}>
                  <FiSun className={styles.sectionIcon} />
                  {t.settings.appearance}
               </h2>

               <div className={styles.settingItem}>
                  <div className={styles.settingInfo}>
                     <span className={styles.settingLabel}>
                        {t.settings.theme}
                     </span>
                     <span className={styles.settingDescription}>
                        {t.settings.themeDescription}
                     </span>
                  </div>
                  <button
                     className={`${styles.themeToggle} ${theme === "dark" ? styles.dark : ""}`}
                     onClick={() => {
                        toggleTheme();
                        handleSaveSettings();
                     }}
                  >
                     {theme === "light" ? <FiMoon /> : <FiSun />}
                     <span>
                        {theme === "light"
                           ? t.settings.darkMode
                           : t.settings.lightMode}
                     </span>
                  </button>
               </div>
            </div>

            {/* Units Section */}
            <div className={styles.section}>
               <h2 className={styles.sectionTitle}>
                  <FiThermometer className={styles.sectionIcon} />
                  {t.settings.units}
               </h2>

               <div className={styles.settingItem}>
                  <div className={styles.settingInfo}>
                     <span className={styles.settingLabel}>
                        {t.settings.temperatureUnit}
                     </span>
                     <span className={styles.settingDescription}>
                        {t.settings.temperatureDescription}
                     </span>
                  </div>
                  <button
                     className={styles.unitToggle}
                     onClick={() => {
                        toggleUnit();
                        handleSaveSettings();
                     }}
                  >
                     <FiThermometer />
                     <span>
                        {unit === "metric"
                           ? t.units.celsius
                           : t.units.fahrenheit}
                     </span>
                  </button>
               </div>

               <div className={styles.unitsPreview}>
                  <div className={styles.unitPreview}>
                     <FiWind />
                     <span>
                        {t.settings.wind}:{" "}
                        {unit === "metric" ? t.units.ms : t.units.mph}
                     </span>
                  </div>
                  <div className={styles.unitPreview}>
                     <FiDroplet />
                     <span>
                        {t.settings.pressure}: {t.units.hPa}
                     </span>
                  </div>
                  <div className={styles.unitPreview}>
                     <FiMapPin />
                     <span>
                        {t.settings.visibility}: {t.units.km}
                     </span>
                  </div>
               </div>
            </div>

            {/* Notifications Section */}
            <div className={styles.section}>
               <h2 className={styles.sectionTitle}>
                  <FiBell className={styles.sectionIcon} />
                  {t.settings.notifications}
               </h2>

               <div className={styles.settingItem}>
                  <div className={styles.settingInfo}>
                     <span className={styles.settingLabel}>
                        {t.settings.enableNotifications}
                     </span>
                     <span className={styles.settingDescription}>
                        {t.settings.notificationsDescription}
                     </span>
                  </div>
                  <label className={styles.switch}>
                     <input
                        type="checkbox"
                        checked={notifications}
                        onChange={(e) => {
                           setNotifications(e.target.checked);
                           handleSaveSettings();
                        }}
                     />
                     <span className={styles.slider}></span>
                  </label>
               </div>

               {notifications && (
                  <div className={styles.notificationSettings}>
                     <div className={styles.settingItem}>
                        <span className={styles.settingLabel}>
                           {t.settings.alertTypes}
                        </span>
                        <div className={styles.checkboxGroup}>
                           <label className={styles.checkboxLabel}>
                              <input
                                 type="checkbox"
                                 checked={localNotificationTypes.rain}
                                 onChange={() =>
                                    handleNotificationTypeChange("rain")
                                 }
                              />
                              {t.settings.rainAlerts}
                           </label>
                           <label className={styles.checkboxLabel}>
                              <input
                                 type="checkbox"
                                 checked={localNotificationTypes.storm}
                                 onChange={() =>
                                    handleNotificationTypeChange("storm")
                                 }
                              />
                              {t.settings.stormWarnings}
                           </label>
                           <label className={styles.checkboxLabel}>
                              <input
                                 type="checkbox"
                                 checked={localNotificationTypes.extremeTemp}
                                 onChange={() =>
                                    handleNotificationTypeChange("extremeTemp")
                                 }
                              />
                              {t.settings.temperatureExtremes}
                           </label>
                           <label className={styles.checkboxLabel}>
                              <input
                                 type="checkbox"
                                 checked={localNotificationTypes.snow}
                                 onChange={() =>
                                    handleNotificationTypeChange("snow")
                                 }
                              />
                              {t.settings.snowAlerts}
                           </label>
                           <label className={styles.checkboxLabel}>
                              <input
                                 type="checkbox"
                                 checked={localNotificationTypes.wind}
                                 onChange={() =>
                                    handleNotificationTypeChange("wind")
                                 }
                              />
                              {t.settings.highWindWarnings}
                           </label>
                        </div>
                     </div>
                  </div>
               )}
            </div>

            {/* Data Refresh Section */}
            <div className={styles.section}>
               <h2 className={styles.sectionTitle}>
                  <FiRefreshCw className={styles.sectionIcon} />
                  {t.settings.dataRefresh}
               </h2>

               <div className={styles.settingItem}>
                  <div className={styles.settingInfo}>
                     <span className={styles.settingLabel}>
                        {t.settings.autoRefresh}
                     </span>
                     <span className={styles.settingDescription}>
                        {t.settings.autoRefreshDescription}
                     </span>
                  </div>
                  <label className={styles.switch}>
                     <input
                        type="checkbox"
                        checked={autoRefresh}
                        onChange={(e) => {
                           setAutoRefresh(e.target.checked);
                           handleSaveSettings();
                        }}
                     />
                     <span className={styles.slider}></span>
                  </label>
               </div>

               {autoRefresh && (
                  <div className={styles.settingItem}>
                     <span className={styles.settingLabel}>
                        {t.settings.refreshInterval}
                     </span>
                     <select
                        className={styles.select}
                        value={refreshInterval}
                        onChange={(e) => {
                           setRefreshInterval(Number(e.target.value));
                           handleSaveSettings();
                        }}
                     >
                        <option value={15}>{t.settings.minutes15}</option>
                        <option value={30}>{t.settings.minutes30}</option>
                        <option value={60}>{t.settings.hour1}</option>
                        <option value={120}>{t.settings.hours2}</option>
                     </select>
                  </div>
               )}
            </div>

            {/* Language Section */}
            <div className={styles.section}>
               <h2 className={styles.sectionTitle}>
                  <FiGlobe className={styles.sectionIcon} />
                  {t.settings.language}
               </h2>

               <div className={styles.settingItem}>
                  <span className={styles.settingLabel}>
                     {t.settings.languageLabel}
                  </span>
                  <select
                     className={styles.select}
                     value={language}
                     onChange={(e) => {
                        setLanguage(e.target.value);
                        handleSaveSettings();
                     }}
                  >
                     <option value="en">English</option>
                     <option value="am">አማርኛ</option>
                     <option value="es">Español</option>
                     <option value="fr">Français</option>
                     <option value="de">Deutsch</option>
                     <option value="it">Italiano</option>
                     <option value="pt">Português</option>
                     <option value="ru">Русский</option>
                     <option value="ja">日本語</option>
                     <option value="zh">中文</option>
                  </select>
               </div>
            </div>

            {/* About Section */}
            <div className={styles.section}>
               <h2 className={styles.sectionTitle}>{t.settings.about}</h2>

               <div className={styles.aboutContent}>
                  <p className={styles.version}>{t.settings.version}</p>
                  <p className={styles.description}>{t.settings.description}</p>
                  <button
                     className={styles.saveButton}
                     onClick={handleSaveSettings}
                  >
                     {t.settings.saveAll}
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Settings;
