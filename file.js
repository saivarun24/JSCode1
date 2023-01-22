function merge(nums1, m, nums2, n) {
  var i;
  i = 0;

  for (var x = 0, _pj_a = nums1.length; x < _pj_a; x += 1) {
    if (i >= n) {
      break;
    }

    if (nums1[x] === 0) {
      nums1[x] = nums2[i];
      i += 1;
    }
  }

  nums1.sort();
}
