// إضافة وظيفة لاختيار الباكج
function showPrice(packageName, price) {
    // إضافة الكلاس selected للباكج المختار
    const allPackages = document.querySelectorAll('.package-card');
    allPackages.forEach(packageCard => packageCard.classList.remove('selected')); // إزالة التحديد من جميع الباكجات

    const selectedPackage = event.currentTarget; // الباكج الذي تم الضغط عليه
    selectedPackage.classList.add('selected'); // إضافة الكلاس selected للباكج المختار

    // تحديث السعر في طرق الدفع
    document.getElementById('vodafone-price').textContent = `${price} - ${packageName}`;
    document.getElementById('instapay-price').textContent = `${price} - ${packageName}`;
}

// إضافة وظيفة لاختيار طريقة الدفع
function selectPaymentMethod(event, methodName, price) {
    // إزالة التحديد من جميع طرق الدفع
    const allPaymentMethods = document.querySelectorAll('.payment-channel');
    allPaymentMethods.forEach(method => method.classList.remove('selected'));

    // إضافة الكلاس selected للطريقة المختارة
    const selectedMethod = event.currentTarget;
    selectedMethod.classList.add('selected');

    // تحديث السعر مع طريقة الدفع المختارة
    document.getElementById('selected-price').textContent = `السعر: ${price} - طريقة الدفع: ${methodName}`;

    // تغيير لون النص أو إضافة تأثيرات عند اختيار طريقة الدفع
    document.getElementById('selected-price').style.color = '#4CAF50'; // تغيير اللون إلى أخضر عند اختيار الدفع
}

// إضافة تحقق من رقم الهاتف
function validatePhoneNumber(phoneNumber) {
    // تحقق إذا كان رقم الهاتف المصري صحيح (مثال: يبدأ بـ "01" وطوله 11 رقم)
    const phonePattern = /^01[0-9]{9}$/;
    return phonePattern.test(phoneNumber);
}

// عند الضغط على زر الإرسال
document.getElementById('submit-phone').addEventListener('click', function() {
    let phoneNumber = document.getElementById('phone-number').value;
    
    // التحقق من صحة الرقم
    if (phoneNumber && validatePhoneNumber(phoneNumber)) {
        alert('تم إدخال رقم التليفون: ' + phoneNumber);
        // هنا يمكن إضافة الكود لإرسال الرقم إلى الخادم أو التعامل معه
        document.getElementById('phone-popup').style.display = 'none'; // إغلاق النافذة بعد الإدخال
    } else {
        alert('من فضلك أدخل رقم تليفون صحيح');
    }
});

// عند الضغط على قناة دفع لفتح النافذة المنبثقة
document.querySelectorAll('.payment-channel').forEach(function(channel) {
    channel.addEventListener('click', function() {
        // إضافة الـ class المختارة لتمييز الطريقة المحددة
        document.querySelectorAll('.payment-channel').forEach(function(item) {
            item.classList.remove('selected');
        });
        channel.classList.add('selected');

        // إظهار النافذة المنبثقة
        document.getElementById('phone-popup').style.display = 'flex';
    });
});

// إغلاق النافذة المنبثقة عند الضغط على زر الإغلاق
document.getElementById('close-popup').addEventListener('click', function() {
    document.getElementById('phone-popup').style.display = 'none';
});

function showPrice(package, price) {
    alert("سعر " + package + " هو " + price);
}


