// Sample data for Vietnamese universities
const universities = [
    {
        name: "Đại học Kinh tế Quốc dân",
        region: "Hà Nội",
        type: "Công lập",
        established: 1956,
        website: "neu.edu.vn",
        admissionMethods: ["Xét tuyển thẳng", "Xét tuyển theo điểm thi THPT", "Xét tuyển kết hợp"],
        detailedInfo: {
            totalQuota: "Chỉ tiêu được phân bổ theo từng phương thức xét tuyển",
            admissionPeriod: "01/6/2025 - 30/6/2025 (đăng ký trực tuyến trên hệ thống NEU và Bộ GD&ĐT)",
            scoringNote: "Điểm xét tuyển được quy đổi về thang điểm 30",
            methods: {
                "Xét tuyển thẳng": {
                    condition: "Theo quy định của Bộ Giáo dục và Đào tạo",
                    quota: "3% tổng chỉ tiêu"
                },
                "Xét tuyển theo điểm thi THPT": {
                    condition: "Sử dụng kết quả thi tốt nghiệp THPT năm 2025",
                    quota: "Phần còn lại",
                    scoring: "Tổng điểm 3 môn trong tổ hợp + điểm ưu tiên",
                    note: "Sử dụng 4 tổ hợp: A00 (Toán, Lý, Hóa), A01 (Toán, Lý, Anh), D01 (Toán, Văn, Anh), D07 (Toán, Hóa, Anh). Không có chênh lệch điểm giữa các tổ hợp"
                },
                "Xét tuyển kết hợp": {
                    condition: "Áp dụng cho 3 nhóm đối tượng:\n1. SAT ≥ 1200 hoặc ACT ≥ 26\n2. Chứng chỉ tiếng Anh (IELTS ≥ 5.5, TOEFL iBT ≥ 46, TOEIC 4 kỹ năng: L&R 785, S 160, W 150) + điểm thi THPT môn Toán và một môn khác\n3. Chứng chỉ tiếng Anh + điểm thi đánh giá năng lực (HSA ≥ 85, APT ≥ 700, TSA ≥ 60)",
                    quota: "83% tổng chỉ tiêu",
                    scoring: "Điểm quy đổi chứng chỉ tiếng Anh + (Điểm đánh giá năng lực × 30/150) × 2/3 + điểm ưu tiên",
                    note: "Không sử dụng kết quả miễn thi ngoại ngữ, điểm thi bảo lưu từ các năm trước, không cộng điểm ưu tiên chứng chỉ nghề"
                }
            }
        }
    },
    {
        name: "Đại học Hải Phong",
        region: "Hải Phòng",
        type: "Tư thục",
        established: 1997,
        website: "hpu.edu.vn",
        admissionMethods: ["Xét tuyển học bạ", "Xét tuyển kết hợp", "Xét tuyển theo năng lực"]
    },
    {
        name: "Đại học Cần Thơ",
        region: "Cần Thơ",
        type: "Công lập",
        established: 1966,
        website: "ctu.edu.vn",
        admissionMethods: ["Xét tuyển theo điểm thi THPT", "Xét tuyển học bạ", "Xét tuyển kết hợp", "Xét tuyển thẳng"]
    },
    {
        name: "Đại học Tôn Đức Thắng",
        region: "TP.HCM",
        type: "Công lập",
        established: 1997,
        website: "tdtu.edu.vn",
        admissionMethods: ["Xét tuyển theo điểm thi THPT", "Xét tuyển học bạ", "Xét tuyển kết hợp", "Xét tuyển thẳng", "Xét tuyển tài năng"]
    },
    {
        name: "Học viện Ngân hàng",
        region: "Hà Nội",
        type: "Công lập",
        established: 1963,
        website: "hvnh.edu.vn",
        admissionMethods: ["Xét tuyển thẳng", "Xét tuyển học bạ", "Xét tuyển chứng chỉ quốc tế", "Xét tuyển đánh giá năng lực", "Xét tuyển theo điểm thi THPT"],
        detailedInfo: {
            admissionPeriod: "05/6/2025 - 15/6/2025 (đăng ký trực tuyến), 16/7 - 28/7/2025 (đăng ký trên hệ thống BGD&ĐT)",
            methods: {
                "Xét tuyển thẳng": {
                    condition: "Theo quy định của Bộ Giáo dục và Đào tạo",
                    quota: "Theo quy định"
                },
                "Xét tuyển học bạ": {
                    condition: "Tốt nghiệp THPT 2024-2025, học lực lớp 12 loại Giỏi, điểm TB 3 năm các môn xét tuyển ≥ 8.0",
                    quota: "20% tổng chỉ tiêu",
                    scoring: "Chuẩn: ((M1×2+M2+M3)×3)/4 + ưu tiên | CLC: ((M1×2+M2×2+M3)×3)/5 + ưu tiên"
                },
                "Xét tuyển chứng chỉ quốc tế": {
                    condition: "Học lực lớp 12 loại Giỏi, điểm TB 3 năm ≥ 8.0, có chứng chỉ: SAT ≥1200, IELTS ≥6.0, TOEFL iBT ≥72",
                    quota: "15% tổng chỉ tiêu",
                    scoring: "Điểm chứng chỉ quy đổi × 3 + ưu tiên"
                },
                "Xét tuyển đánh giá năng lực": {
                    condition: "V-SAT: tổng điểm 3 môn ≥300 | HSA: điểm HSA ≥85",
                    quota: "Theo kế hoạch",
                    scoring: "V-SAT: (M1+M2+M3)×hệ số + ưu tiên | HSA: Điểm quy đổi×3 + ưu tiên"
                },
                "Xét tuyển theo điểm thi THPT": {
                    condition: "Tổng điểm 3 môn đạt ngưỡng đảm bảo chất lượng (sẽ công bố sau)",
                    quota: "Phần còn lại",
                    scoring: "Chuẩn: ((M1×2+M2+M3)×3)/4 + ưu tiên | CLC: ((M1×2+M2×2+M3)×3)/5 + ưu tiên"
                }
            }
        }
    },
    {
        name: "Đại học Thương mại (TMU)",
        region: "Hà Nội",
        type: "Công lập",
        established: 1956,
        website: "tmu.edu.vn",
        admissionMethods: ["Xét tuyển thẳng", "Xét tuyển theo điểm thi THPT", "Xét tuyển đánh giá năng lực", "Xét tuyển đánh giá tư duy", "Xét tuyển kết hợp quốc tế", "Xét tuyển kết hợp HSG"],
        detailedInfo: {
            totalQuota: "5.320 chỉ tiêu cho 45 chương trình đào tạo",
            admissionPeriod: "05/6/2025 - 15/6/2025 (đăng ký trực tuyến TMU), 16/7 - 28/7/2025 (đăng ký trên hệ thống BGD&ĐT)",
            scoringNote: "Tất cả phương thức quy đổi về thang điểm 30",
            methods: {
                "Xét tuyển thẳng": {
                    condition: "Theo quy định BGD&ĐT và quy định riêng của trường",
                    methodCode: "301"
                },
                "Xét tuyển theo điểm thi THPT": {
                    condition: "Sử dụng điểm thi các tổ hợp môn phù hợp với ngành đăng ký",
                    methodCode: "100",
                    scoring: "Tổng điểm 3 môn trong tổ hợp + điểm ưu tiên + điểm thưởng"
                },
                "Xét tuyển đánh giá năng lực": {
                    condition: "Kết quả thi ĐGNL do ĐHQG Hà Nội tổ chức",
                    methodCode: "402",
                    scoring: "(Điểm ĐGNL × 30/150) × Ka + điểm ưu tiên + điểm thưởng"
                },
                "Xét tuyển đánh giá tư duy": {
                    condition: "Kết quả thi ĐGTD do ĐH Bách khoa Hà Nội tổ chức",
                    methodCode: "402",
                    scoring: "(Điểm ĐGTD × 30/100) × Kb + điểm ưu tiên + điểm thưởng"
                },
                "Xét tuyển kết hợp quốc tế": {
                    condition: "Áp dụng cho chương trình định hướng quốc tế, tiên tiến, song bằng",
                    scoring: "Điểm TB 3 năm (Toán + môn không phải ngoại ngữ) + điểm quy đổi chứng chỉ ngoại ngữ + điểm ưu tiên + điểm thưởng"
                },
                "Xét tuyển kết hợp HSG": {
                    condition: "Thí sinh đạt giải Nhất, Nhì, Ba trong kỳ thi HSG cấp tỉnh/thành phố",
                    scoring: "Tổng điểm 3 môn trong tổ hợp + điểm ưu tiên + điểm thưởng"
                }
            }
        }
    },
    {
        name: "Học viện Báo chí và Tuyên truyền (AJC)",
        region: "Hà Nội",
        type: "Công lập",
        established: 1962,
        website: "ajc.edu.vn",
        admissionMethods: ["Xét tuyển học bạ", "Xét tuyển kết hợp", "Xét tuyển theo điểm thi THPT", "Xét tuyển thẳng"],
        detailedInfo: {
            totalQuota: "Chỉ tiêu được phân bổ theo từng phương thức xét tuyển",
            admissionPeriod: "Tháng 5/2025 (xét học bạ và xét tuyển kết hợp), 16/7 - 28/7/2025 (xét tuyển theo điểm thi THPT)",
            scoringNote: "Điểm xét tuyển được quy đổi về thang điểm 30 hoặc 40 tùy nhóm ngành",
            methods: {
                "Xét tuyển học bạ": {
                    condition: "Xét điểm trung bình 6 học kỳ của 3 môn trong tổ hợp xét tuyển",
                    quota: "20% tổng chỉ tiêu",
                    scoring: "[(Điểm TB môn 1) + (Điểm TB môn 2) + (Điểm TB môn 3 × hệ số)] + điểm ưu tiên",
                    note: "Môn nhân hệ số 2 tùy nhóm ngành: Nhóm 1 (Báo chí, Xuất bản): Ngữ văn, Nhóm 3 (Lịch sử): Lịch sử, Nhóm 4 (Truyền thông, PR): Tiếng Anh"
                },
                "Xét tuyển kết hợp": {
                    condition: "Điểm TB học bạ 6 học kỳ ≥ 7.0, IELTS ≥ 6.5 hoặc SAT ≥ 1200/1600, hạnh kiểm Tốt",
                    quota: "30% tổng chỉ tiêu",
                    scoring: "[(Điểm TB môn 1) + (Điểm TB môn 2) + (Điểm quy đổi chứng chỉ tiếng Anh × 2)] + điểm ưu tiên",
                    note: "Quy đổi về thang điểm 40"
                },
                "Xét tuyển theo điểm thi THPT": {
                    condition: "Sử dụng điểm thi các tổ hợp môn phù hợp với ngành đăng ký",
                    quota: "50% tổng chỉ tiêu",
                    scoring: "Tổng điểm 3 môn trong tổ hợp + điểm ưu tiên",
                    note: "Có thể quy đổi điểm chứng chỉ tiếng Anh quốc tế (IELTS ≥ 5.0) thay thế điểm môn tiếng Anh"
                },
                "Xét tuyển thẳng": {
                    condition: "Theo quy định của Bộ Giáo dục và Đào tạo",
                    quota: "Theo quy định"
                }
            }
        }
    },
    {
        name: "Đại học Hà Nội (HANU)",
        region: "Hà Nội",
        type: "Công lập",
        established: 1959,
        website: "hanu.vn",
        admissionMethods: ["Xét tuyển thẳng", "Xét tuyển theo điểm thi THPT", "Xét tuyển kết hợp"],
        detailedInfo: {
            totalQuota: "Chỉ tiêu được phân bổ theo từng phương thức xét tuyển",
            admissionPeriod: "16/7 - 28/7/2025 (đăng ký nguyện vọng), 29/7 - 5/8/2025 (nộp lệ phí), 13/6 - 19/6/2025 (xét tuyển kết hợp)",
            scoringNote: "Điểm ngoại ngữ được nhân hệ số 2 trong tất cả các phương thức",
            methods: {
                "Xét tuyển thẳng": {
                    condition: "Theo quy định của Bộ Giáo dục và Đào tạo",
                    quota: "3% tổng chỉ tiêu"
                },
                "Xét tuyển theo điểm thi THPT": {
                    condition: "Sử dụng kết quả thi tốt nghiệp THPT năm 2025",
                    quota: "Phần còn lại",
                    scoring: "(Điểm Toán + Điểm Ngữ văn + Điểm Ngoại ngữ × 2 + Điểm ưu tiên) × 4/3",
                    note: "Ngành CNTT: (Điểm Toán + Điểm Vật lý/Ngữ văn/Tin học + Điểm tiếng Anh × 2 + Điểm ưu tiên) × 4/3\nNgành CNTT: (Điểm Toán + Điểm Vật lý/Ngữ văn + Điểm tiếng Anh × 2 + Điểm ưu tiên) × 4/3"
                },
                "Xét tuyển kết hợp": {
                    condition: "Chứng chỉ ngoại ngữ quốc tế (IELTS, TOEFL, HSK, JLPT...) kết hợp với kết quả học tập THPT hoặc điểm thi THPT",
                    quota: "Áp dụng cho chương trình CLC, tiên tiến và đào tạo bằng tiếng nước ngoài",
                    scoring: "Theo quy định riêng cho từng chương trình"
                }
            }
        }
    },
    {
        name: "Đại học Ngoại ngữ - ĐHQGHN (ULIS)",
        region: "Hà Nội",
        type: "Công lập",
        established: 1955,
        website: "ulis.vnu.edu.vn",
        admissionMethods: ["Xét tuyển thẳng", "Xét tuyển theo điểm thi THPT", "Xét tuyển kết hợp chứng chỉ", "Xét tuyển theo ĐGNL", "Xét tuyển kết hợp học bạ"],
        detailedInfo: {
            totalQuota: "Chỉ tiêu được phân bổ theo từng phương thức xét tuyển",
            admissionPeriod: "16/7 - 28/7/2025 (đăng ký nguyện vọng), 29/7 - 5/8/2025 (nộp lệ phí), trước 30/6/2025 (xét tuyển thẳng)",
            scoringNote: "Điểm xét tuyển được quy về thang điểm 30, môn ngoại ngữ nhân hệ số 2",
            methods: {
                "Xét tuyển thẳng": {
                    condition: "Theo quy định của Bộ Giáo dục và Đào tạo",
                    quota: "Theo quy định",
                    deadline: "Trước 17h00 ngày 30/6/2025"
                },
                "Xét tuyển theo điểm thi THPT": {
                    condition: "Sử dụng điểm thi của 3 môn trong tổ hợp xét tuyển",
                    quota: "Phần còn lại",
                    scoring: "[(Điểm môn 1 + Điểm môn 2 + (Điểm Ngoại ngữ × 2)) / 4 × 3] + điểm thưởng + điểm ưu tiên"
                },
                "Xét tuyển kết hợp chứng chỉ": {
                    condition: "Chứng chỉ ngoại ngữ quốc tế (IELTS, TOEFL) kết hợp với điểm thi THPT",
                    quota: "Theo kế hoạch",
                    scoring: "Điểm chứng chỉ quy đổi (nhân hệ số 2) + điểm 2 môn còn lại",
                    note: "Ví dụ: IELTS 5.5 = 8.5 điểm, IELTS 7.0-9.0 = 10 điểm"
                },
                "Xét tuyển theo ĐGNL": {
                    condition: "Điểm thi ĐGNL của ĐHQGHN, điểm hợp phần Tiếng Anh ≥ 30/50",
                    quota: "Theo kế hoạch",
                    scoring: "Điểm quy đổi về thang điểm 30"
                },
                "Xét tuyển kết hợp học bạ": {
                    condition: "Học sinh trường THPT chuyên hoặc lớp chuyên cấp tỉnh/thành phố",
                    quota: "Theo kế hoạch",
                    scoring: "Điểm chứng chỉ quốc tế (×2) + điểm TB 6 học kỳ của 2 môn còn lại"
                }
            }
        }
    },
    {
        name: "Đại học Ngoại thương (FTU)",
        region: "Hà Nội",
        type: "Công lập",
        established: 1960,
        website: "ftu.edu.vn",
        admissionMethods: ["Xét tuyển thẳng", "Xét tuyển học bạ", "Xét tuyển theo điểm thi THPT", "Xét tuyển theo ĐGNL"],
        detailedInfo: {
            totalQuota: "Chỉ tiêu được phân bổ theo từng phương thức xét tuyển",
            admissionPeriod: "16/7 - 28/7/2025 (đăng ký xét tuyển), 22/8/2025 (công bố kết quả)",
            methods: {
                "Xét tuyển thẳng": {
                    condition: "Theo quy định của Bộ Giáo dục và Đào tạo",
                    quota: "Theo quy định"
                },
                "Xét tuyển học bạ": {
                    condition: "Thí sinh có thành tích học tập xuất sắc, đáp ứng điều kiện đảm bảo chất lượng của nhà trường",
                    quota: "Theo kế hoạch",
                    scoring: "Trung bình cộng điểm 3 môn trong tổ hợp xét tuyển (làm tròn đến 1 chữ số thập phân)"
                },
                "Xét tuyển theo điểm thi THPT": {
                    condition: "Sử dụng kết quả thi tốt nghiệp THPT năm 2025",
                    quota: "Phần còn lại",
                    scoring: "Tổng điểm 3 môn trong tổ hợp xét tuyển + điểm ưu tiên"
                },
                "Xét tuyển theo ĐGNL": {
                    condition: "Sử dụng kết quả kỳ thi đánh giá năng lực (HSA của ĐHQGHN hoặc APT của ĐHQG-HCM)",
                    quota: "Theo kế hoạch",
                    scoring: "Điểm quy đổi từ kỳ thi đánh giá năng lực về thang điểm 30 + điểm ưu tiên"
                }
            }
        }
    },
    {
        name: "Học viện Tài chính (AOF)",
        region: "Hà Nội",
        type: "Công lập",
        established: 1963,
        website: "hvtc.edu.vn",
        admissionMethods: ["Xét tuyển thẳng", "Xét tuyển năng lực vượt trội", "Xét tuyển theo điểm thi THPT", "Xét tuyển kết hợp"],
        detailedInfo: {
            totalQuota: "Chỉ tiêu được phân bổ theo từng phương thức xét tuyển",
            admissionPeriod: "16/7 - 28/7/2025 (đăng ký), 23/7/2025 (công bố điểm sàn), 29/7 - 5/8/2025 (nộp lệ phí), 16/8 - 20/8/2025 (lọc ảo), 30/8/2025 (xác nhận nhập học đợt 1)",
            methods: {
                "Xét tuyển thẳng": {
                    condition: "Theo quy định của Bộ Giáo dục và Đào tạo",
                    quota: "Theo quy định"
                },
                "Xét tuyển năng lực vượt trội": {
                    condition: "Đạt giải Nhất, Nhì kỳ thi HSG cấp tỉnh/thành phố (Toán, Lý, Hóa, Tin, Anh, Văn) hoặc có chứng chỉ quốc tế (IELTS ≥ 7.0, TOEFL iBT ≥ 95, SAT ≥ 1450)",
                    quota: "Theo kế hoạch",
                    scoring: "30 + (Điểm TB học tập lớp 10 + 11 + 12) / 3"
                },
                "Xét tuyển theo điểm thi THPT": {
                    condition: "Sử dụng kết quả thi tốt nghiệp THPT năm 2025",
                    quota: "Phần còn lại",
                    scoring: "Theo tổ hợp môn xét tuyển"
                },
                "Xét tuyển kết hợp": {
                    condition: "Kết hợp điểm thi THPT và điểm TB học tập 3 năm THPT",
                    quota: "Theo kế hoạch",
                    scoring: "Điểm môn 1 (×2) + Điểm môn 2 + Điểm môn 3",
                    note: "Môn 1: Tiếng Anh (chương trình quốc tế/Ngôn ngữ Anh) hoặc Toán (các ngành khác)\nMôn 2: Lý/Hóa/Văn/Toán hoặc Tiếng Anh\nMôn 3: Điểm TB học tập 3 năm THPT (≥ 8.0)"
                }
            }
        }
    },
    {
        name: "Học viện Ngoại giao (DAV)",
        region: "Hà Nội",
        type: "Công lập",
        established: 1959,
        website: "dav.edu.vn",
        admissionMethods: ["Xét tuyển thẳng", "Xét tuyển kết hợp học bạ", "Xét tuyển kết hợp điểm thi THPT", "Xét tuyển theo điểm thi THPT"],
        detailedInfo: {
            totalQuota: "Chỉ tiêu được phân bổ theo từng phương thức xét tuyển",
            admissionPeriod: "Theo thông báo của Học viện (dav.edu.vn)",
            methods: {
                "Xét tuyển thẳng": {
                    condition: "Theo quy định của Bộ Giáo dục và Đào tạo",
                    quota: "Theo quy định"
                },
                "Xét tuyển kết hợp học bạ": {
                    condition: "Điểm TB 6 học kỳ ≥ 8.0 và có chứng chỉ quốc tế (IELTS, TOEFL iBT, SAT, ACT)",
                    quota: "Theo kế hoạch",
                    scoring: "A + B + C + D",
                    note: "A: Điểm quy đổi chứng chỉ quốc tế\nB: Tổng điểm TB 2 môn (có Toán/Văn) trong 6 học kỳ\nC: Điểm khuyến khích HSG\nD: Điểm ưu tiên"
                },
                "Xét tuyển kết hợp điểm thi THPT": {
                    condition: "Tham dự kỳ thi THPT 2025 và có chứng chỉ quốc tế",
                    quota: "Theo kế hoạch",
                    scoring: "A + B + C + D",
                    note: "A: Điểm quy đổi chứng chỉ quốc tế\nB: Tổng điểm 2 môn thi (có Toán/Văn)\nC: Điểm khuyến khích HSG\nD: Điểm ưu tiên"
                },
                "Xét tuyển theo điểm thi THPT": {
                    condition: "Sử dụng kết quả thi tốt nghiệp THPT năm 2025",
                    quota: "Phần còn lại",
                    scoring: "A + B + C",
                    note: "A: Tổng điểm 3 môn thi\nB: Điểm khuyến khích HSG\nC: Điểm ưu tiên"
                }
            }
        }
    },
    {
        name: "Đại học Giao thông Vận tải (UTC)",
        region: "Hà Nội",
        type: "Công lập",
        established: 1960,
        website: "utc.edu.vn",
        admissionMethods: ["Xét tuyển theo điểm thi THPT", "Xét tuyển học bạ", "Xét tuyển theo ĐGNL", "Xét tuyển theo ĐGTD"],
        detailedInfo: {
            totalQuota: "6.340 chỉ tiêu",
            admissionPeriod: "1/7 - 20/7/2025 (đăng ký), 4/6/2025 (công bố kết quả xét tuyển), 20/6/2025 (công bố kết quả thi), 22/8 - 27/8/2025 (xác nhận nhập học), 6/9 - 8/9/2025 (nhập học), 9/9/2025 (khai giảng)",
            methods: {
                "Xét tuyển theo điểm thi THPT": {
                    condition: "Sử dụng kết quả thi tốt nghiệp THPT năm 2025",
                    quota: "Phần lớn chỉ tiêu",
                    scoring: "(Điểm Toán × 2) + Điểm môn 2 + Điểm môn 3 + Điểm ưu tiên",
                    note: "Điểm môn Toán được nhân hệ số 2 trong tất cả tổ hợp"
                },
                "Xét tuyển học bạ": {
                    condition: "Sử dụng kết quả học tập 6 học kỳ THPT",
                    quota: "Theo kế hoạch",
                    scoring: "(Điểm TB Toán × 2) + Điểm TB môn 2 + Điểm TB môn 3",
                    note: "Điểm TB từng môn mỗi năm ≥ 5.5"
                },
                "Xét tuyển theo ĐGNL": {
                    condition: "Kết quả ĐGNL 2025 của ĐHQGHN hoặc ĐHQG-HCM",
                    quota: "Áp dụng cho các ngành tại Hà Nội và TP.HCM",
                    scoring: "Theo quy định của từng trường",
                    note: "Điểm từ 80% thang điểm trở lên"
                },
                "Xét tuyển theo ĐGTD": {
                    condition: "Kết quả ĐGTD 2024-2025 của ĐH Bách khoa Hà Nội",
                    quota: "Áp dụng cho một số ngành tại Hà Nội",
                    scoring: "Theo quy định của ĐH Bách khoa",
                    note: "Điểm từ 80% thang điểm trở lên"
                }
            }
        }
    },
    {
        name: "Học viện Công nghệ Bưu chính Viễn thông (PTIT)",
        region: "Hà Nội",
        type: "Công lập",
        established: 1997,
        website: "ptit.edu.vn",
        admissionMethods: ["Xét tuyển tài năng", "Xét tuyển thẳng", "Xét hồ sơ năng lực", "Xét tuyển theo chứng chỉ quốc tế", "Xét tuyển theo ĐGNL/ĐGTD", "Xét tuyển kết hợp IELTS/TOEFL", "Xét tuyển theo điểm thi THPT"],
        detailedInfo: {
            totalQuota: "Chỉ tiêu được phân bổ theo từng phương thức xét tuyển",
            admissionPeriod: "Tháng 3 - 7/2025 (xét tuyển sớm), tháng 7-8/2025 (xét theo điểm THPT)",
            methods: {
                "Xét tuyển tài năng": {
                    condition: "Đoạt giải Nhất, Nhì, Ba HSG Quốc gia, Quốc tế (Toán, Lý, Hóa, Tin, Anh, Văn)",
                    quota: "Theo quy định"
                },
                "Xét hồ sơ năng lực": {
                    condition: "Một trong các điều kiện:\n- HSG cấp tỉnh (Nhất, Nhì, Ba, KK)\n- Học sinh trường chuyên (điểm TB lớp 10-12 ≥ 7.5, hạnh kiểm Khá trở lên)",
                    quota: "Theo kế hoạch",
                    scoring: "(Điểm học lực × 60%) + (Điểm thành tích × 40%) + Điểm ưu tiên"
                },
                "Xét tuyển theo chứng chỉ quốc tế": {
                    condition: "SAT ≥ 1130/1600 hoặc ACT ≥ 25/36 (còn hạn 2 năm)",
                    quota: "Theo kế hoạch",
                    scoring: "Điểm SAT/ACT + Điểm cộng + Điểm ưu tiên"
                },
                "Xét tuyển theo ĐGNL/ĐGTD": {
                    condition: "Một trong các điều kiện:\n- ĐGNL ĐHQG TP.HCM (APT) ≥ 600 điểm\n- ĐGNL ĐHQG Hà Nội (HSA) ≥ 75 điểm\n- ĐGTD Bách khoa Hà Nội (TSA) ≥ 50 điểm\n- ĐGNL Sư phạm Hà Nội (SPT) ≥ 15 điểm",
                    quota: "Theo kế hoạch",
                    scoring: "Điểm thi ĐGNL/ĐGTD + Điểm cộng + Điểm ưu tiên"
                },
                "Xét tuyển kết hợp IELTS/TOEFL": {
                    condition: "IELTS ≥ 5.5 hoặc TOEFL iBT ≥ 65 và điểm TB lớp 10-12 ≥ 7.5 (3 môn tổ hợp)",
                    quota: "Theo kế hoạch",
                    scoring: "(ĐTB môn 1 + ĐTB môn 2 + ĐTB môn 3) + Điểm quy đổi IELTS + Điểm ưu tiên",
                    note: "Điểm IELTS có thể thay thế điểm môn Tiếng Anh trong tổ hợp"
                },
                "Xét tuyển theo điểm thi THPT": {
                    condition: "Sử dụng kết quả thi tốt nghiệp THPT năm 2025",
                    quota: "Phần còn lại",
                    scoring: "Điểm môn 1 + Điểm môn 2 + Điểm môn 3 + Điểm ưu tiên",
                    note: "Điểm cộng: 1-3 điểm cho thí sinh có giải HSG"
                }
            }
        }
    },
    {
        name: "Đại học Sư phạm Hà Nội 2 (SP2)",
        region: "Hà Nội",
        type: "Công lập",
        established: 1967,
        website: "hpu2.edu.vn",
        admissionMethods: ["Xét tuyển theo điểm thi THPT", "Xét tuyển kết hợp năng khiếu", "Xét tuyển theo kỳ thi độc lập", "Xét tuyển học bạ", "Xét tuyển theo ĐGNL", "Xét tuyển thẳng", "Xét tuyển dự bị đại học"],
        detailedInfo: {
            totalQuota: "Chỉ tiêu được phân bổ theo từng phương thức xét tuyển",
            admissionPeriod: "01/4 - 04/5/2025 (đăng ký thi độc lập), 01/6/2025 (thi độc lập), trước 19/6/2025 (công bố kết quả)",
            methods: {
                "Xét tuyển theo điểm thi THPT": {
                    condition: "Sử dụng kết quả thi tốt nghiệp THPT năm 2025",
                    methodCode: "PT100",
                    scoring: "Điểm Môn 1 + Điểm Môn 2 + Điểm Môn 3 + Điểm ưu tiên"
                },
                "Xét tuyển kết hợp năng khiếu": {
                    condition: "Áp dụng cho ngành Giáo dục Mầm non, Giáo dục Thể chất, Quản lý TDTT",
                    methodCode: "PT405",
                    scoring: "Điểm bài thi đánh giá năng lực + Điểm thi năng khiếu + Điểm ưu tiên",
                    note: "Điểm thi năng khiếu: thang điểm 20 (Mầm non) hoặc 30 (Thể chất, TDTT)"
                },
                "Xét tuyển theo kỳ thi độc lập": {
                    condition: "Tham dự kỳ thi độc lập của trường",
                    methodCode: "PT401",
                    scoring: "Điểm Môn 1 + Điểm Môn 2 + Điểm Môn 3 + Điểm ưu tiên"
                },
                "Xét tuyển học bạ": {
                    condition: "Sử dụng kết quả học tập THPT",
                    methodCode: "PT200",
                    scoring: "Trung bình cộng điểm học tập (Môn 1 + Môn 2 + Môn 3) + Điểm ưu tiên"
                },
                "Xét tuyển theo ĐGNL": {
                    condition: "Sử dụng kết quả thi đánh giá năng lực",
                    methodCode: "PT402",
                    scoring: "Ngành Mầm non: Điểm ĐGNL + Điểm năng khiếu + Điểm ưu tiên\nCác ngành khác: Điểm ĐGNL + Điểm ưu tiên"
                },
                "Xét tuyển thẳng": {
                    condition: "Theo quy định của Bộ Giáo dục và Đào tạo",
                    methodCode: "PT301",
                    quota: "Theo quy định"
                },
                "Xét tuyển dự bị đại học": {
                    condition: "Học sinh hoàn thành chương trình dự bị đại học",
                    methodCode: "PT301-DB",
                    quota: "Theo quy định"
                }
            }
        }
    },
    {
        name: "Đại học Xây dựng Hà Nội (HUCE)",
        region: "Hà Nội",
        type: "Công lập",
        established: 1966,
        website: "huce.edu.vn",
        admissionMethods: ["Xét tuyển theo điểm thi THPT", "Xét tuyển học bạ", "Xét tuyển theo ĐGTD/ĐGNL", "Xét tuyển theo chứng chỉ quốc tế", "Xét tuyển thẳng"],
        detailedInfo: {
            totalQuota: "Chỉ tiêu được phân bổ theo từng phương thức xét tuyển",
            admissionPeriod: "15/5 - 10/6/2025 (đăng ký xét tuyển), 16/7 - 28/7/2025 (đăng ký nguyện vọng)",
            methods: {
                "Xét tuyển theo điểm thi THPT": {
                    condition: "Sử dụng kết quả thi tốt nghiệp THPT năm 2025",
                    quota: "Phần lớn chỉ tiêu",
                    scoring: "Tổng điểm 3 môn thi/bài thi theo tổ hợp + Điểm ưu tiên",
                    note: "Các ngành có môn Vẽ Mỹ thuật sử dụng kết quả thi môn Vẽ của Trường hoặc các trường khác (được quy đổi về thang điểm của Trường)"
                },
                "Xét tuyển học bạ": {
                    condition: "Áp dụng cho các ngành không có môn Vẽ Mỹ thuật",
                    quota: "Theo kế hoạch",
                    scoring: "Tổng điểm 3 môn theo tổ hợp + Điểm ưu tiên",
                    note: "Có thể sử dụng IELTS 5.5 trở lên thay thế môn Tiếng Anh"
                },
                "Xét tuyển theo ĐGTD/ĐGNL": {
                    condition: "Áp dụng cho các ngành không có môn Vẽ Mỹ thuật, bao gồm:\n- ĐGTD (TSA) 2024-2025 của ĐH Bách khoa Hà Nội\n- ĐGNL 2025 của ĐH Sư phạm Hà Nội\n- V-SAT 2025",
                    quota: "Theo kế hoạch",
                    scoring: "Tổng điểm các môn thi/bài thi theo tổ hợp + Điểm ưu tiên"
                },
                "Xét tuyển theo chứng chỉ quốc tế": {
                    condition: "Áp dụng cho các ngành không có môn Vẽ Mỹ thuật\nSAT ≥ 1200 hoặc ACT ≥ 26 (còn hiệu lực)",
                    quota: "Theo kế hoạch",
                    scoring: "Điểm quy đổi từ chứng chỉ + Điểm ưu tiên"
                },
                "Xét tuyển thẳng": {
                    condition: "Theo quy định của Bộ GD&ĐT và đề án của Trường\nĐạt giải Nhất, Nhì, Ba HSG cấp tỉnh/thành phố",
                    quota: "Theo quy định",
                    note: "Xét tuyển theo ngành/chuyên ngành phù hợp với môn đoạt giải"
                }
            },
            registrationLinks: {
                online: "https://xthb.huce.edu.vn",
                nguyenVong: "https://utxt.huce.edu.vn"
            }
        }
    }
]; 